const { allAlbums, insertAlbum, updateAlbumById, deleteAlbumById, findById } = require('./album.service')
const Response = require('../utils/response')

exports.listAlbums = async (req, res) => {

    try {

        const data = await allAlbums()
        return res.json(data)

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.getAlbum = async (req, res) => {

    try {

        const data = await findById(req.params.albumId)
        return res.json(data)

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.addAlbum = async (req, res) => {

    try {

        await insertAlbum(req.body)
        return Respone.ok(res, 200, undefined, undefined)

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.updateAlbum = async (req, res) => {

    const albumId = req.params.albumId

    try {
        await updateAlbumById(albumId, req.body)
        return Response.ok(res, 200, undefined, undefined)
    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.deleteAlbum = async (req, res) => {
    try {

        await deleteAlbumById(req.params.albumId)
        return Response.ok(res, 200, undefined, undefined)

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

