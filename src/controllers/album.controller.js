const { allAlbums, insertAlbum, updateAlbumById, deleteAlbumById, createModel, findById } = require('../service/album.service')
const songsService = require('../service/tracks.service')

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

        const model = await createModel(req.body)
        const data = await insertAlbum(model)
        return res.json(data)

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.updateAlbum = async (req, res) => {

    const albumId = req.params.albumId

    try {

        const isExist = await findById(albumId)
        if (!isExist) return res.status(400).json({ msg: 'Album is not exist' })
        const data = await updateAlbumById(albumId, req.body)
        return res.json(data)
    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.deleteAlbum = async (req, res) => {
    let filter = {}
    try {
        const isAlbumExists = await findById(req.params.albumId)
        if (!isAlbumExists) return res.status(400).json({ msg: 'Album is not exist' })

        filter.album = req.params.albumId
        const isRelatedToSong = await songsService.allTrack(filter)
        if (isRelatedToSong != []) return res.status(400).json({ msg: 'You cannot delete this album since there is songs related to it' })

        const data = await deleteAlbumById(req.params.albumId)
        return res.json(data)
    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

