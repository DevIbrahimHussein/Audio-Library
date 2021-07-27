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

    sendEmail(){
        const mailOptions = {
            from: from,
            to: 'support@bobshop.com',  
            subject: subject,
            text: message,
        }
        transporter.sendMail(mailOptions)
    }

}