const { allTrack, insertTrack, updateTrackById, deleteTrackById, findById, allTracksWithAlbumId } = require('./track.service')
const Response = require('../utils/response')

exports.listTracks = async (req, res) => {

    try {
        const data = await allTrack({})
        return res.json(data)
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
        await insertTrack(req.body)
        return Response.ok(res, 200, undefined, undefined)
    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.updateTrack = async (req, res) => {

    try {
        await updateTrackById(req.params.songId, req.body)
        return Response.ok(res, 200, undefined, undefined)
    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.deleteTrack = async (req, res) => {

    try {
        await deleteTrackById(req.params.songId)
        return Response.ok(res, 200, undefined, undefined)
    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.listTracksByAlbumId = async (req, res) => {

    try {
        let filter = {}
        filter.album = req.params.albumId
        if (req.query.category) filter.category = req.query.category
        await allTracksWithAlbumId(filter)
        return Response.ok(res, 200, undefined, undefined)

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}
