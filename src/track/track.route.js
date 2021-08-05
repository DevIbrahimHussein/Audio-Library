const express = require('express')
const router = express.Router()


router.post('/song',
    validateTrackRequest,
    addTrack
)

router.get('/songs',
    listTracks
)

router.get('/song/:songId',
    getTrack
)

router.put('/song/:songId',
    updateTrack
)

router.delete('/song/:songId',
    deleteTrack
)

router.get('/songs/:albumId',
    verifyToken,
    listTracksByAlbumId
)

module.exports = router