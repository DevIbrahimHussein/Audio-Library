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
        require: true
    },

    updatedDate: {
        type: String,
        require: true
    }

})

module.exports = mongoose.model('Album', album)