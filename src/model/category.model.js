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
        require: true
    },

    updatedDate: {
        type: Date,
        require: true
    }

})

module.exports = mongoose.model('Category', category)