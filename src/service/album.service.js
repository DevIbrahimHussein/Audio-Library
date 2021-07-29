const model = require('../model/album.model')
const { convertToObject } = require('../utils/helpers')
module.exports = {

    createModel(reqBody) {
        return new model({
            name: reqBody.name,
            description: reqBody.description
        })
    },

    allAlbums() {
        return model.aggregate([
            { $sort: { createdDate: -1 } },
            {
                $lookup: {
                    from: "tracks",
                    let: { album: "$_id" },
                    pipeline: [{ $match: { $expr: { $eq: ["$album", "$album"] } } }],
                    as: "tracks"
                }
            },
            { $addFields: { showNbTracks: { $size: "$tracks" } } }
        ])
    },

    findById(albumId) {
        return model.findById(albumId)
    },

    insertAlbum(album) {
        return album.save()
    },

    updateAlbumById(albumId, album) {
        album.updatedDate = new Date()
        albumId = convertToObject(albumId)
        return model.updateOne(
            { _id: albumId },
            [{
                $set: album
            }]
        )
    },

    deleteAlbumById(albumId) {
        return model.findByIdAndDelete(albumId)
    }

}