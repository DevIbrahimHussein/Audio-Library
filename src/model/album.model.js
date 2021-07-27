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
    },

    createdDate: {
        type: Date,
        default: new Date()
    },

    updatedDate: Date,

},{ versionKey: false })

module.exports = mongoose.model('Album', album)