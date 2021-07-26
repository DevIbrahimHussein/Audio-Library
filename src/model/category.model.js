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

    createdDate: Date,

    updatedDate: Date

},{ versionKey: false })

module.exports = mongoose.model('Category', category)