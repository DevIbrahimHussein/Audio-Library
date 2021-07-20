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
        return model.find()
    },

    findById(albumId){
        return model.findById(albumId)
    },

    insertAlbum(album){
        return album.save()
    },

    updateAlbumById(albumId, album){
        return model.findByIdAndUpdate(albumId, album)
    },

    deleteAlbumById(albumId){
        return model.findByIdAndDelete(albumId)
    }

}