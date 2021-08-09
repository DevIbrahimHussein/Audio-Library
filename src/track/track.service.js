const model = require('./track.model')
const { convertToObject } = require('../utils/helpers')
const ObjectId = require('mongoose').Types.ObjectId

module.exports = {

    async createModel(reqBody) {
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

        // throw error if category id is not valid
        if(!ObjectId.isValid(data.category)) throw new Error('Category must be a valid id')

        // throw error if album id is not valid
        if(!ObjectId.isValid(data.album)) throw new Error('Album must be a valid id')

        // create track model
        const track = await module.exports.createModel(data)
        // save track
        track.save()
    },

    async updateTrackById(trackId, track) {

        if(track.category) 
            if(ObjectId.isValid(data.category)) 
                throw new Error('Category must be a valid id')

        if(track.album)    
            if(ObjectId.isValid(data.album)) 
                throw new Error('Album must be a valid id')

        await model.findByIdAndUpdate(trackId, track)
    },

    async deleteTrackById(trackId) {
        await model.findByIdAndDelete(trackId)
    },

    async allTracksWithAlbumId(filter) {
        return model.find(filter).sort({ createdDate: 1 })
    }

}