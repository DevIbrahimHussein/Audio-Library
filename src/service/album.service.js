const model = require('../model/album.model')
const { convertToObject } = require('../utils/helpers')
module.exports = {

    createModel(reqBody) {
        return new model({
            name: reqBody.name,
            description: reqBody.description
        })
    },

    albumUpdateModel(reqBody){
        return {
            name: reqbody.name,
            description: reqBody.description
        }
    },

    allAlbums() {
        return model.aggregate([
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

    findById(albumId) {
        albumId = convertToObject(albumId)
        return model.aggregate([
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

    insertAlbum(album) {
        return album.save()
    },

    updateAlbumById(albumId, album) {
        album.updatedDate = new Date()
        //albumId = convertToObject(albumId)
        return model.findByIdAndUpdate(albumId, album)
    },

    deleteAlbumById(albumId) {
        return model.findByIdAndDelete(albumId)
    }

}