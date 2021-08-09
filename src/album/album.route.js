const express = require('express')
const router = express.Router()
const validation = require('./album.validator')
const controller = require('./album.controller')

router.post('/album',
    validation.validateAlbumRequest,
    controller.addAlbum
)

router.get('/albums',
    controller.listAlbums
)

router.get('/album/:albumId',
    controller.getAlbum
)

router.put('/album/:albumId',
    controller.updateAlbum
)

router.delete('/album/:albumId',
    controller.deleteAlbum
)

module.exports = router