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

    allTrack(filter, skip, limit) {

        let aggregate_array = [
            { $lookup: { from: "categories", localField: "category", foreignField: "_id", as: "category" } },
            { $lookup: { from: "albums", localField: "album", foreignField: "_id", as: "album" } }
        ]

        if(skip) 
            aggregate_array.push({ $skip: skip })

        if(limit) 
            aggregate_array.push({ $limit: limit })

        return model.aggregate(aggregate_array)
        
    },

    findById(trackId) {
        return model.aggregate([
            { $match: { _id: convertToObject(trackId) } },
            { $lookup: { from: "categories", localField: "category", foreignField: "_id", as: "category" } },
            { $lookup: { from: "albums", localField: "album", foreignField: "_id", as: "album" } }
        ])
    },

    async insertTrack(data) {

        // throw error if category id is not valid
        if (!ObjectId.isValid(data.category)) throw new Error('Category must be a valid id')

        // throw error if album id is not valid
        if (!ObjectId.isValid(data.album)) throw new Error('Album must be a valid id')

        // create track model
        const track = await module.exports.createModel(data)
        // save track
        track.save()
    },

    async updateTrackById(trackId, track) {

        if (track.category)
            if (ObjectId.isValid(data.category))
                throw new Error('Category must be a valid id')

        if (track.album)
            if (ObjectId.isValid(data.album))
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