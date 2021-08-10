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

    allTrack(url_query) {

        // aggregate array init
        let aggregate_array = []

        // filter init
        let filter = {}

        // add category id to filter if exists
        if(url_query.categoryId) filter.category = convertToObject(url_query.categoryId)

        // add album id to filter if exists
        if(url_query.albumId) filter.album = convertToObject(url_query.albumId)

        // if not empty push filter to aggregate array
        if(filter) aggregate_array.push({ $match: filter })
        
        // push skip to aggregate array if exists
        if(url_query.skip) aggregate_array.push({ $skip: Number(url_query.skip) })

        // push limit to aggregate array if exists
        if(url_query.limit) aggregate_array.push({ $limit: Number(url_query.limit) })

        // push joining
        aggregate_array.push({ $lookup: { from: "categories", localField: "category", foreignField: "_id", as: "category" } })
        aggregate_array.push({ $lookup: { from: "albums", localField: "album", foreignField: "_id", as: "album" } })

        // execute & return aggregate array
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