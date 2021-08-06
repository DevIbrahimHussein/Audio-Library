const { allAlbums, insertAlbum, updateAlbumById, deleteAlbumById, findById } = require('./album.service')

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

        const data = await insertAlbum(req.body)
        return res.json(data)

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.updateAlbum = async (req, res) => {

    const albumId = req.params.albumId

    try {
        const data = await updateAlbumById(albumId, req.body)
        return res.json(data)
    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.deleteAlbum = async (req, res) => {
    try {

        const data = await deleteAlbumById(req.params.albumId)
        return res.json(data)

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

