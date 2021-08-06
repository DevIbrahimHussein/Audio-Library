const model = require('../model/user.model')
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
        const isUserEmailExists = await this.isEmailExist(body.email)

        // throw error if email already exists
        if(isUserEmailExists) throw new Error('Email Exists')

        // create user model
        const user = await createUserModel(body)

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
            expiresIn: 31556926 // 1 year in seconds 
        }

        // csign the token
        const token = jwt.sign(
            payload,
            process.env.JwtSECRET,
            expiresIn
        )

        // return token
        return token
    },

    async login(data) {

        // find user
        const user = await this.isUserExist(data)

        // throw error if email or password is incorrect
        if(!user) throw new Error('email or password is incorrect')

        // get signed token
        const token = await this.signToken(user)

        // return token
        return token

    },

    async allUsers() {
        // get all users without password
        return model.aggregate([
            { $project: { password: 0 } }
        ])
    },

    async removeUser(userId) {
        model.findByIdAndDelete(userId)
    }

}