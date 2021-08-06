const express = require('express')
const router = express.Router()
const validation = require('../middleware/validations.middleware')
const controller = require('./track.controller')
const middleware = require('../middleware/auth.middleware')

router.post('/song',
    validation.validateTrackRequest,
    controller.addTrack
)

router.get('/songs',
    controller.listTracks
)

router.get('/song/:songId',
    controller.getTrack
)

router.put('/song/:songId',
    controller.updateTrack
)

router.delete('/song/:songId',
    controller.deleteTrack
)

router.get('/songs/:albumId',
    middleware.verifyToken,
    controller.listTracksByAlbumId
)

module.exports = router