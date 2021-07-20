const mongoose = require('mongoose')

const track = mongoose.Schema({
    
    name: {
        type: String,
        require: true
    },

    singer: {
        type: String,
        require: true
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },

    album: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    }

})

module.exports = mongoose.model('Track', track)