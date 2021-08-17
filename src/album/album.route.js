const express = require('express')
const router = express.Router()
const validation = require('./album.validator')
const controller = require('./album.controller')
const { validate } = require('express-validation')
//const adminSettingsValidation = require('./adminSettings.validation')

//  validate(adminSettingsValidation.updateAdminSettingsValidation), Controller.updateAdminSettings

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