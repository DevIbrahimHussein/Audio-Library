const mongoose = require('mongoose')

const category = mongoose.Schema({
    
    name: {
        require: true
    },

    description: {
        require: true
    },

    createdDate: {
        require: true
    },

    updatedDate: {
        require: true
    }

})

module.exports = mongoose.model('Category', category)