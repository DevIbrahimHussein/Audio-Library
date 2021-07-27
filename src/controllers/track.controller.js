const { createModel, allTrack, insertTrack, updateTrackById, deleteTrackById, findById, allTracksWithAlbumId } = require('../service/tracks.service')
const { convertToObject } = require('../utils/helpers')

exports.listTracks = async (req, res, next) => {

    try {
        const data = await allTrack()
        return res.status(200).json(data)
    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.getTrack = async (req, _, next) => {

    try {
        const data = await findById(convertToObject(req.params.songId))
        return res.json(data)
    } catch(e) {
        return res.status(500).json({ msg: e })
    }

}

exports.addTrack = async (req, res, next) => {

    try {
        const model = createModel(req.body)
        const data = await insertTrack(model)
        return res.json(data)
    } catch(e) {
        return res.status(500).json({ msg: e })
    }

}

exports.updateTrack = async (req, _, next) => {

    try {
        const data = await updateTrackById(convertToObject(req.params.songId), req.body)
        return res.json(data)
    } catch (e){
        return res.status(500).json({ msg: e })
    }

}

exports.deleteTrack = async (req, _, next) => {
    
    try {
        const data = await deleteTrackById(convertToObject(req.params.songId))
        return res.json(data)
    } catch(e) {
        return res.status(500).json({ msg: e })
    }

}

exports.listTracksByAlbumId = async(req, res) => {

    try {

        const data = await allTracksWithAlbumId(convertToObject(req.params.albumId))
        return res.json(data)

    } catch(e){
        return res.status(500).json({ msg: e })
    }

}
