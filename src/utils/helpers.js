const mongoose = require("mongoose")
const nodemailer = require('nodemailer')
const user = 'ibrahimhussein19.98@gmail.com'
const pass = 'gibshniirjtiqfwx'

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


    }

}