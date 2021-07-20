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
        type: Number,
        require: true
    }

}, { 
    timestamps: true 
})

module.exports = mongoose.model('Album', album)