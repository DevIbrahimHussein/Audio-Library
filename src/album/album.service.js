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

    async allAlbums() {
        return Model.aggregate([
            { $sort: { createdDate: -1 } },
            {
                $lookup: {
                    from: "tracks",
                    let: { album: "$_id" },
                    pipeline: [{ $match: { $expr: { $eq: ["$$album", "$album"] } } }],
                    as: "tracks"
                }
            },
            { $addFields: { showNbTracks: { $size: "$tracks" } } }
        ])
    },

    async findById(albumId) {
        
        // convert album id for aggregation
        albumId = convertToObject(albumId)

        return Model.aggregate([
            { $match: { _id: albumId } },
            {
                $lookup: {
                    from: "tracks",
                    let: { album: "$_id" },
                    pipeline: [{ $match: { $expr: { $eq: ["$$album", "$album"] } } }],
                    as: "tracks"
                }
            },
            { $addFields: { showNbTracks: { $size: "$tracks" } } }
        ])
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