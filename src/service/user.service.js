const model = require('../model/user.model')
const jwt = require('jsonwebtoken')
const sha256 = require('sha256')

module.exports = {

    createUserModel(data) {

        const hashedPassword = sha256(data.password)

        return new model({
            name: data.name,
            email: data.email,
            password: hashedPassword
        })

    },

    signup(user) {
        return user.save()
    },

    signToken(user) {

        const payload = {
            id: user._id,
            password: user.password
        }

        const expiresIn = {
            expiresIn: 31556926 // 1 year in seconds 
        }

        const token = jwt.sign(
            payload,
            process.env.JwtSECRET,
            expiresIn
        )

        return token
    },

    isUserExist(data) {

        const hashedPassword = sha256(data.password)

        return model.findOne({
            email: data.email,
            password: hashedPassword
        })

    },

    isEmailExist(email){
        return model.findOne({ 
            email: email
        })
    },

    allUsers() {
        return model.aggregate([
            { $project: { password: 0 } }
        ])
    },

    removeUser(userId) {
        return model.findByIdAndDelete(userId)
    }

}