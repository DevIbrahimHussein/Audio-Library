const { allTrack, insertTrack, updateTrackById, deleteTrackById, findById, allTracksWithAlbumId } = require('./track.service')
const Response = require('../utils/response')

exports.listTracks = async (req, res) => {

    try {
        const data = await allTrack(req.query)
        return Response.ok(res, data)
    } catch (e) {
        return Response.notOk(res, 500, e.message)
    }

}

exports.getTrack = async (req, res) => {

    try {
        const data = await findById(req.params.songId)
        return Response.ok(res, data)
    } catch (e) {
        return Response.notOk(res, 500, e.message)
    }

}

exports.addTrack = async (req, res) => {

    try {
        await insertTrack(req.body)
        return Response.ok(res)
    } catch (e) {
        return Response.notOk(res, 500, e.message)
    }

}

exports.updateTrack = async (req, res) => {

    try {
        await updateTrackById(req.params.songId, req.body)
        return Response.ok(res)
    } catch (e) {
        return Response.notOk(res, 500, e.message)
    }

}

exports.deleteTrack = async (req, res) => {

    try {
        await deleteTrackById(req.params.songId)
        return Response.ok(res)
    } catch (e) {
        return Response.notOk(res, 500, e.message)
    }

}

exports.listTracksByAlbumId = async (req, res) => {

    try {
        const data = await allTracksWithAlbumId(req.params, req.query)
        return Response.ok(res, data)

    } catch (e) {
        return Response.notOk(res, 500, e.message)
    }

}
