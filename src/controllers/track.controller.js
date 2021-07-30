const { createModel, allTrack, insertTrack, updateTrackById, deleteTrackById, findById, allTracksWithAlbumId } = require('../service/tracks.service')

exports.listTracks = async (req, res) => {

    try {
        const data = await allTrack({})
        return res.status(200).json(data)
    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.getTrack = async (req, res) => {

    try {
        const data = await findById(req.params.songId)
        return res.json(data)
    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.addTrack = async (req, res) => {

    try {
        const model = createModel(req.body)
        const data = await insertTrack(model)
        return res.json(data)
    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.updateTrack = async (req, res) => {

    try {
        const data = await updateTrackById(req.params.songId, req.body)
        return res.json(data)
    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.deleteTrack = async (req, res) => {

    try {
        const data = await deleteTrackById(req.params.songId)
        return res.json(data)
    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.listTracksByAlbumId = async (req, res) => {

    try {
        let filter = {}
        filter.album = req.params.albumId
        if (req.query.category) filter.category = req.query.category
        const data = await allTracksWithAlbumId(filter)
        return res.json(data)

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}
