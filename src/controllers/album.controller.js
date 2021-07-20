const { allAlbums, insertAlbum, updateAlbumById, deleteAlbumById, createModel } = require('../service/album.service')
const catchAsync = require('../utils/errors')

exports.listAlbums = catchAsync(async (req, res, next) => {

    req.data = await allAlbums()
    next()

})

exports.addAlbum = catchAsync(async (req, res, next) => {

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

