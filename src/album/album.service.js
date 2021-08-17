const Model = require('./album.model')
const { convertToObject } = require('../utils/helpers')
const songService = require('../track/track.service')
const Response = require('../utils/response')

module.exports = {

    async createModel(data) {
        return new Model({
            name: data.name,
            description: data.description
        })
    },

    async allAlbums(params) {

        let aggregate_array = []
        let filter = {}

        if(params.albumId) filter._id = convertToObject(params.albumId)

        if(filter) aggregate_array.push({ $match: filter })

        aggregate_array.push({ $sort: { createdDate: -1 } })

        aggregate_array.push({
            $lookup: {
                from: "tracks",
                let: { album: "$_id" },
                pipeline: [{ $match: { $expr: { $eq: ["$$album", "$album"] } } }],
                as: "tracks"
            }
        })

        aggregate_array.push({ $addFields: { showNbTracks: { $size: "$tracks" } } })

        return Model.aggregate(aggregate_array)
    },

    async insertAlbum(body) {
        const album = await module.exports.createModel(body)
        album.save()
    },

    async updateAlbumById(albumId, album) {

        // get the album
        const isAlbumExists = await Model.findById(albumId)

        // throw error if album doesn't exist
        if(!isAlbumExists) throw new Error(Response.response_msgs.IS_EXIST)

        album.updatedDate = Date.now()

        // save
        await Model.findByIdAndUpdate(albumId, album)
    },

    async deleteAlbumById(albumId, params) {

        let filter = {}

        // get album
        const isAlbumExists = await Model.findById(albumId)

        // throw error if album doesn't exists
        if(!isAlbumExists) throw new Error(Response.response_msgs.IS_EXIST)

        filter.album = params.albumId
        
        // get songs that has album id
        const isRelatedToSong = await songService.allTrack(filter)

        // throw error if album is related to song
        if(isRelatedToSong != []) throw new Error(Response.response_msgs.RELTATED)

        // delete
        await Model.findByIdAndDelete(albumId)
    }

}