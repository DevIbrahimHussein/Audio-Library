const mongoose = require('mongoose')
const Category = require('../category/category.model')
const Album = require('../album/album.model')

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
        type: mongoose.Types.ObjectId,
        ref: Category,
        require: true
    },

    album: {
        type: mongoose.Types.ObjectId,
        ref: Album,
        require: true
    },

    createdDate: {
        type: Date,
        default: new Date()
    }

}, { versionKey: false })

module.exports = mongoose.model('Track', track)