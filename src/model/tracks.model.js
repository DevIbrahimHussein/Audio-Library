const mongoose = require('mongoose')

const track = mongoose.Schema({
    
    name: {
        require: true
    },

    singer: {
        require: true
    },

    category: {
        require: true
    },

    album: {
        require: true
    }

})

module.exports = mongoose.model('Track', track)