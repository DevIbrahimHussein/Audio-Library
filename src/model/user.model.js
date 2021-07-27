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

    registrationDate: {
        type: Date,
        default: new Date()
    }

},{ versionKey: false })

module.exports = mongoose.model('User', user)