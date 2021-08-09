const mongoose = require('mongoose')

const user = mongoose.Schema({

    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        unique: true,
        require: true
    },

    password: {
        type: String,
        require: true
    },

    loginAttempts: {
        type: Number,
        default: 0 
    },

    isBlocked: {
        type: Boolean,
        default: false
    },

    registrationDate: {
        type: Date,
        default: new Date()
    },

    resetPasswordToken: {
        type: String,
        require: false
    },

    resetPasswordExpires: {
        type: Date,
        require: false
    }

}, { versionKey: false })

// db index
user.index({ email: 1 })


module.exports = mongoose.model('User', user)