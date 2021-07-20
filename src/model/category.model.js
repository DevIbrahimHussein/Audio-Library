const mongoose = require('mongoose')

const category = mongoose.Schema({
    
    name: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    }

}, { 
    timestamps: true 
})

module.exports = mongoose.model('Category', category)