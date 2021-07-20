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
    }

}, { 
    timestamps: true 
})

module.exports = mongoose.model('Album', album)