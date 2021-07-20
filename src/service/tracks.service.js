const model = require('../model/tracks.model')

module.exports = {

    createModel(reqBody){
        return new model(reqBody)
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