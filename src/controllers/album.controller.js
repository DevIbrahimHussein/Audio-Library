const { allAlbums, insertAlbum, updateAlbumById, deleteAlbumById, createModel, findById } = require('../service/album.service')
const catchAsync = require('../utils/errors')
const { validateAlbumRequest } = require('../utils/validation')

exports.listAlbums = catchAsync(async (req, res, next) => {

    req.data = await allAlbums()
    next()

})

exports.getAlbum = catchAsync(async (req, res, next) => {

    req.data = await findById(req.params.albumId)
    next()

})

exports.addAlbum = catchAsync(async (req, res, next) => {

    const { errors, isValid } = validateAlbumRequest(req.body)

    if(!isValid){
        return res.status(404).json(errors)
    }

    const model = createModel(req.body)
    req.data = await insertAlbum(model)
    next()

})

exports.updateAlbum = catchAsync(async (req, res, next) => {

    req.data = await updateAlbumById(req.params.albumId, req.body)
    next()

})

exports.deleteAlbum = catchAsync(async (req, res, next) => {

    req.data = await deleteAlbumById(req.params.albumId)
    next()

})

