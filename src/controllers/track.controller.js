const { createModel, allTrack, insertTrack, updateTrackById, deleteTrackById, findById } = require('../service/tracks.service')
const catchAsync = require('../utils/errors')
const { validateTrackRequest } = require('../utils/validation')


exports.listTracks = catchAsync(async (req, res, next) => {

    req.data = await allTrack()
    next()

})

exports.getTrack = catchAsync(async (req, _, next) => {

    req.data = await findById(req.params.songId)
    next()

})

exports.addTrack = catchAsync(async (req, res, next) => {

    const { errors, isValid } = validateTrackRequest(req.body)

    if(!isValid){
        return res.status(404).json(errors)
    }

    const model = createModel(req.body)
    req.data = await insertTrack(model)
    next()

})

exports.updateTrack = catchAsync(async (req, _, next) => {

    req.data = await updateTrackById(req.params.songId, req.body)
    next()

})

exports.deleteTrack = catchAsync(async (req, _, next) => {
    
    req.data = await deleteTrackById(req.params.songId)
    next()

})
