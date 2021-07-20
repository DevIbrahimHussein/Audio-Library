const express = require('express')
const { listAlbums, addAlbum, updateAlbum, deleteAlbum } = require('./controllers/album.controller')
const { addCategory, listCategories, updateCategory, deleteCategory } = require('./controllers/category.controller')
const { addTrack, listTracks, updateTrack, deleteTrack } = require('./controllers/track.controller')
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

router.put('/album/:categoryId',
    updateAlbum,
    dataHandler
)

router.delete('/album/:categoryId',
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

router.put('/song/:songId',
    updateTrack,
    dataHandler
)

router.delete('/song/:songId',
    deleteTrack,
    dataHandler
)

module.exports = router 