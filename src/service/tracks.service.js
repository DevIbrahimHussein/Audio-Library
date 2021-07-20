const model = require('../model/tracks.model')

module.exports = {

    createModel(reqBody){
        return new model(reqBody)
    },

    alltrack(){
        return model.find()
    },

    inserttrack(track){
        return track.save()
    },

    updatetrackById(trackId, track){
        return model.findByIdAndUpdate(trackId, track)
    },

    deletetrackById(trackId){
        return model.findByIdAndDelete(trackId)
    }

}