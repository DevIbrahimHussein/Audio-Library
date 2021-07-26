const express = require('express')
const router = express.Router()
const { listAlbums, addAlbum, updateAlbum, deleteAlbum, getAlbum } = require('./controllers/album.controller')
const { addCategory, listCategories, updateCategory, deleteCategory, getCategory } = require('./controllers/category.controller')
const { addTrack, listTracks, updateTrack, deleteTrack, getTrack } = require('./controllers/track.controller')
const { signup } = require('./controllers/user.controller')

const { dataHandler } = require('./middleware/route-level.middleware')
const { validateAlbumRequest } = require('./middleware/validations.middleware')
// ========================================================================================================================

router.post('/category',
    addCategory,
)

router.get('/categories',
    listCategories,
)

router.get('/category/:categoryId',
    getCategory,
)

router.put('/category/:categoryId',
    updateCategory,
)

router.delete('/category/:categoryId',
    deleteCategory,
)

// ========================================================================================================================

router.post('/album',
    validateAlbumRequest,
    addAlbum
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

//====================================================================

router.post('/login')

router.post('/signup',
    signup
)

module.exports = router 