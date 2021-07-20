const model = require('../model/track.model')
var mongoose = require('mongoose')

module.exports = {

    createModel(reqBody){
        return new model({
            name: reqBody.name,
            singer: reqBody.singer,
            category: mongoose.Types.ObjectId(reqBody.category),
            album: mongoose.Types.ObjectId(reqBody.album)
        })
    },

    allTrack(){
        return model.find()
    },

    insertTrack(track){
        return track.save()
    },

    updateTrackById(trackId, track){
        return model.findByIdAndUpdate(trackId, track)
    },

    deleteTrackById(trackId){
        return model.findByIdAndDelete(trackId)
    }

}