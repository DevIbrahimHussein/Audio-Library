const { allAlbums, insertAlbum, updateAlbumById, deleteAlbumById, findById } = require('./album.service')
const Response = require('../utils/response')

exports.listAlbums = async (req, res) => {

    try {

        const data = await allAlbums(req.params)
        return Response.ok(res, data)

    } catch (e) {
        return Response.notOk(res, 500, e.message)
    }

}

exports.getAlbum = async (req, res) => {

    try {

        const data = await allAlbums(req.params)
        return Response.ok(res, data)

    } catch (e) {
        return Response.notOk(res, 500, e.message)
    }

}

exports.addAlbum = async (req, res) => {

    try {

        await insertAlbum(req.body)
        return Response.ok(res)

    } catch (e) {
        return Response.notOk(res, 500, e.message)
    }

}

exports.updateAlbum = async (req, res) => {

    const albumId = req.params.albumId

    try {
        await updateAlbumById(albumId, req.body)
        return Response.ok(res)
    } catch (e) {

        if(e.message == 'Already exists') 
            return Response.notOk(res, 409, e.message)

        if(e.message == 'Is related to song')
            return Response.notOk(res, 400, e.message)

        return Response.notOk(res, 500, e.message)
        
    }

}

exports.deleteAlbum = async (req, res) => {
    try {

        await deleteAlbumById(req.params.albumId)
        return Response.ok(res)

    } catch (e) {
        return Response.notOk(res, 500, e.message)
    }

}

