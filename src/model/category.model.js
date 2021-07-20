const mongoose = require('mongoose')

const category = mongoose.Schema({
    
    name: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    },

    createdDate: {
        type: Date,
        default: Date.now(),
        require: true
    },

    updatedDate: {
        type: Date
    }

})

module.exports = mongoose.model('Category', category)