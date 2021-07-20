const mongoose = require('mongoose')

const album = mongoose.Schema({
    
    name: {
        require: true
    },

    description: {
        require: true
    },

    showNbTracks: {
        require: true
    },

    createdDate: {
        require: true
    },

    updatedDate: {
        require: true
    }

})

module.exports = mongoose.model('Album', album)