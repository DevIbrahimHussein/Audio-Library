const mongoose = require('mongoose')

const album = mongoose.Schema({
    
    name: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    },

    showNbTracks: {
        type: String,
        require: true
    },

    createdDate: {
        type: String,
        default: Date.now(),
        require: true
    },

    updatedDate: {
        type: String
    }

})

module.exports = mongoose.model('Album', album)