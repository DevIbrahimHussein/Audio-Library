const model = require('../model/user.model')
const jwt = require('jsonwebtoken')
const sha256 = require('sha256')
const { deleteUser } = require('../controllers/user.controller')

module.exports = {

    createUserModel(data){

        const hashedPassword = sha256(data.password)

        return new model({
            name: data.name,
            email: data.email,
            password: hashedPassword
        })

    },

    signup(user){
        return user.save()
    },

    signToken(user){

        const payload = {
            id: user.id,
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

    isUserExist(data){

        return model.findOne({
            email: data.email
        })
        
    },

    allUsers(){
        return model.aggregate([
            { $project: { password: 0 } }
        ])
    },

    deleteUser(userId){
        return model.findByIdAndDelete(userId)
    }

}