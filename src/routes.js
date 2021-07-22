const express = require('express')
const { listAlbums, addAlbum, updateAlbum, deleteAlbum, getAlbum } = require('./controllers/album.controller')
const { addCategory, listCategories, updateCategory, deleteCategory, getCategory } = require('./controllers/category.controller')
const { addTrack, listTracks, updateTrack, deleteTrack, getTrack } = require('./controllers/track.controller')
const router = express.Router()

const { dataHandler } = require('./middleware/route-level.middleware')
// ========================================================================================================================

router.post('/category',
    addCategory,
    dataHandler
)

router.get('/categories',
    listCategories,
    dataHandler
)

router.get('/category/:categoryId',
    getCategory,
    dataHandler
)

router.put('/category/:categoryId',
    updateCategory,
    dataHandler
)

router.delete('/category/:categoryId',
    deleteCategory,
    dataHandler
)

// ========================================================================================================================

router.post('/album',
    addAlbum,
    dataHandler
)

router.get('/albums',
    listAlbums,
    dataHandler
)

router.get('/album/:albumId',
    getAlbum,
    dataHandler
)

router.put('/album/:albumId',
    updateAlbum,
    dataHandler
)

router.delete('/album/:albumId',
    deleteAlbum,
    dataHandler
)

// ========================================================================================================================

router.post('/song',
    addTrack,
    dataHandler
)

router.get('/songs',
    listTracks,
    dataHandler
)

router.get('/song/:songId',
    getTrack,
    dataHandler
)

router.put('/song/:songId',
    updateTrack,
    dataHandler
)

router.delete('/song/:songId',
    deleteTrack,
    dataHandler
)

module.exports = router 