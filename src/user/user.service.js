const model = require('./user.model')
const jwt = require('jsonwebtoken')
const sha256 = require('sha256')
const { sendWelcomeEmail } = require('../utils/helpers')

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

        // csign the token
        const token = jwt.sign(
            payload,
            __config.jwt.secret,
            expiresIn
        )

        // return token
        return token
    },

    async login(data) {

        // find user
        const user = await module.exports.isUserExist(data)

        // throw error if user blocked
        if(user.isBlocked) throw new Error('Blocked')

        //  if user doesn't found
        if(!user) {
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
        await model.findOneAndUpdate({ _id: user._id }, { loginAttempts: 0 })

        // get signed token
        const token = await module.exports.signToken(user)

        // return token
        return token

    },

    async allUsers() {
        // get all users without password
        return await model.aggregate([
            { $project: { password: 0 } }
        ])
    },

    async removeUser(userId) {
        await model.findByIdAndDelete(userId)
    }

}