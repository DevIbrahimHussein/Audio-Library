const model = require('./track.model')
const { convertToObject } = require('../utils/helpers')

module.exports = {

    async createModel(reqBody) {
        return new model({
            name: reqBody.name,
            singer: reqBody.singer,
            category: convertToObject(reqBody.category),
            album: convertToObject(reqBody.album)
        })
    },

    async allTrack(filter) {
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

    async findById(trackId) {
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

    async insertTrack(data) {
        // create track model
        const track = await this.createModel(data)
        // save track
        track.save()
    },

    async updateTrackById(trackId, track) {
        model
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

    async deleteTrackById(trackId) {
        model.findByIdAndDelete(trackId)
    },

    async allTracksWithAlbumId(filter) {
        return model.find(filter).sort({ createdDate: 1 })
    }

}