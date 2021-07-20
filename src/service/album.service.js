const model = require('../model/album.model')

module.exports = {

    createModel(reqBody){
        return new model(reqBody)
    },

    allAlbums(){
        return model.find()
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