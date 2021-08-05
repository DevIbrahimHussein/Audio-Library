const express = require('express')
const routes = express.Router()

router.post('/album',
    validateAlbumRequest,
    addAlbum
)

router.get('/albums',
    listAlbums
)

router.get('/album/:albumId',
    getAlbum
)

router.put('/album/:albumId',
    updateAlbum
)

router.delete('/album/:albumId',
    deleteAlbum
)

module.exports = router