const model = require('../model/track.model')
const { convertToObject } = require('../utils/helpers')

module.exports = {

    createModel(reqBody) {
        return new model({
            name: reqBody.name,
            singer: reqBody.singer,
            category: convertToObject(reqBody.category),
            album: convertToObject(reqBody.album)
        })
    },

    allTrack(filter) {
        return model
            .find(filter)
            .populate({
                path: 'category',
                model: 'Category'
            })
            .populate({
                path: 'album',
                model: 'Album'
            })
    },

    findById(trackId) {
        return model
            .findById(trackId)
            .populate({
                path: 'category',
                model: 'Category'
            })
            .populate({
                path: 'album',
                model: 'Album'
            })
    },

    insertTrack(track) {
        return track
            .save()
    },

    updateTrackById(trackId, track) {
        return model
            .findByIdAndUpdate(trackId, track)
            .populate({
                path: 'category',
                model: 'Category'
            })
            .populate({
                path: 'album',
                model: 'Album'
            })
    },

    deleteTrackById(trackId) {
        return model.findByIdAndDelete(trackId)
    },

    allTracksWithAlbumId(filter) {
        return model.find(filter).sort({ createdDate: 1 })
    }

}