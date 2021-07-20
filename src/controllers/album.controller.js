const { allAlbums, insertAlbum } = require('../service/album.service')
const catchAsync = require('../utils/errors')

exports.listAlbums = catchAsync(async (req, res, next) => {

    req.data = await allAlbums()
    next()

})

exports.addAlbum = catchAsync(async (req, res, next) => {

    req.data = await insertAlbum()
    next()

})

exports.updateAlbum = catchAsync(async (req, res, next) => {

    

})

exports.deleteAlbum = catchAsync(async (req, res, next) => {

})

