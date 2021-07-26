const model = require('../model/album.model')

module.exports = {

    createModel(reqBody){
        return new model({
            name: reqBody.name,
            description: reqBody.description,
            showNbTracks: reqBody.showNbTracks
        })
    },

    allAlbums(){
        return model.aggregate([
            { $sort: { createdDate: -1 } }
        ])
    },

    findById(albumId){

        return model.aggregate([
            { $match : { _id: albumId } }
        ])
    },

    insertAlbum(album){
        return album.save()
    },

    updateAlbumById(albumId, album){
        return model.updateOne(
            { _id: albumId },
            [{
                $set : album
            }]
        )
    },

    deleteAlbumById(albumId){
        return model.findByIdAndDelete(albumId)
    }

}