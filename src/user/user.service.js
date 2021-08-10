const model = require('./user.model')
const jwt = require('jsonwebtoken')
const sha256 = require('sha256')
const { sendResetPasswordEmail } = require('../utils/helpers')
const crypto = require('crypto')

module.exports = {

    async createUserModel(data) {

        const hashedPassword = sha256(data.password)

        return new model({
            name: data.name,
            email: data.email,
            password: hashedPassword
        })

    },

    async isEmailExist(email){
        return model.findOne({ 
            email: email
        })
    },

    async isUserExist(data) {

        const hashedPassword = sha256(data.password)

        return model.findOne({
            email: data.email,
            password: hashedPassword
        })

    },

    async signup(body) {

        // get users with specified email
        const isUserEmailExists = await module.exports.isEmailExist(body.email)

        // throw error if email already exists
        if(isUserEmailExists) throw new Error('Email Exists')

        // create user model
        const user = await module.exports.createUserModel(body)

        // send welcome message
        sendWelcomeEmail(user)

        // save user into database
        user.save()
    },

    async signToken(user) {

        // create the payload from id and password
        const payload = {
            id: user._id,
            password: user.password
        }

        // token will expire after 1 year
        const expiresIn = {
            expiresIn: __config.jwt.expiresIn // 1 year in seconds 
        }

        // sign the token
        const token = jwt.sign(
            payload,
            __config.jwt.secret,
            expiresIn
        )

        // return token
        return token
    },

    async login(data) {

        // get email
        user = await model.findOne({ email: data.email })

        // throw error if email is blocked
        if(user.isBlocked) throw new Error('Blocked')

        // find user
        const isAuthUser = await module.exports.isUserExist(data)

        //  if credentials are wrong
        if(!isAuthUser) {
            // increment login attempts by 1
            await model.updateOne({ email: user.email }, {$inc: { 'loginAttempts': 1 }})
            // check if this is the 4th time the user tried to login, block if true
            if(user.loginAttempts == 3) {
                // block email
                await model.updateOne({ email: user.email }, { $set : { isBlocked: true }})
                // throw new error
                throw new Error('Blocked')
            }
            // throw new error if credentials are incorrect
            throw new Error('Incorrect')
        }

        // reset loginAttempts to default value 0
        await model.findOneAndUpdate({ _id: isAuthUser._id }, { loginAttempts: 0 })

        // get signed token
        const token = await module.exports.signToken(user)

        // return token
        return token

    },

    async isBlocked(body){
        // update user blocking
        await model.updateOne({ email: body.email }, { $set: { isBlocked: body.isBlocked, loginAttempts: 0 } } )
    },

    async allUsers() {
        // get all users without password
        return await model.aggregate([
            { $project: { password: 0 } }
        ])
    },

    async removeUser(userId) {
        await model.findByIdAndDelete(userId)
    },

    async sendResetPasswordEmail(email){
        
        // get user's id, name, and email
        const user = await model.findOne({ email: email }, 'email name')
        
        // throw error if no user found
        if(!user) throw new Error('Email not exists')

        // generate token for reset password
        const token = crypto.randomBytes(20).toString('hex')

        // token expires in 1 hour
        const expiresIn = new Date() + 3600000

        // update user
        await model.updateOne(
            { email: email },
            { $set: 
                { 
                    resetPasswordToken: token,
                    resetPasswordExpiresDate: expiresIn 
                } 
            }
        )
        
        // send an email along with the reset password URL
        sendResetPasswordEmail(user, token)
    },

    async checkResetPasswordUrlValidation(userId, token){
        
        const user = model.findOne({ _id: userId , resetPasswordToken: token}, { resetPasswordExpiresDate })

        const date = new Date()

        // if now date is newer than expiry date throw error
        if(date.getTime() > user.resetPasswordExpiresDate.getTime()) throw new Error('Link is not valid')

    },

    async resetPassword(userId, token, newPassword){

        module.exports.checkResetPasswordUrlValidation(userId, token)

        await model.updateOne(
            { _id: userId },
            { $set : { password: newPassword } }
        )
    }

}