require('dotenv').config()
const mongoose = require("mongoose")
const nodemailer = require('nodemailer')
const user = process.env.AUTH_GMAIL_USER
const pass = process.env.AUTH_GMAIL_PASSWORD

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
        user: user,
        pass: pass
    }
})

module.exports = {

    convertToObject(strId){
        return mongoose.Types.ObjectId(strId)
    },

    sendWelcomeEmail(user){

        const mailOptions = {
            from: 'support@audio-library.com',
            to: user.email,  
            subject: "Registration",
            text: `Welcome ${user.name}`,
        }

        try {
            transporter.sendMail(mailOptions)
        } catch(e) {
            console.log(e)
        }

    },

    sendResetPasswordEmail(user, token){

        cn

        const mailOptions = {
            from: 'support@audio-library.com',
            to: user.email,  
            subject: "Audio-Library Reset Password ",
            text: `Welcome ${user.name}, 
            kinldy check the below link to reset your password.
            Your link is only valid for 1 hour\nYour Link   ` + __config.server.url + `api/user/${user._id}/token/${token}`
        }

        try {
            transporter.sendMail(mailOptions)
        } catch(e) {
            console.log(e)
        }

    }

}