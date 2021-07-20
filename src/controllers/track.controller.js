const { createModel, allTrack, insertTrack, updateTrackById, deleteTrackById } = require('../service/tracks.service')
const catchAsync = require('../utils/errors')


exports.listTracks = catchAsync(async (req, res, next) => {

    req.data = await allTrack()
    next()

})

exports.addTrack = catchAsync(async (req, res, next) => {

    const model = createModel(req.body)
    req.data = await insertTrack(model)
    next()

})

exports.updateTrack = catchAsync(async (req, res, next) => {

    req.data = await updateTrackById(req.params.songId, req.body)
    next()

})

exports.deleteTrack = catchAsync(async (req, res, next) => {
    
    req.data = await deleteTrackById(req.params.songId)
    next()

})
