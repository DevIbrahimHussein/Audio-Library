const express = require('express')
const router = express.Router()

const { listAlbums, addAlbum, updateAlbum, deleteAlbum, getAlbum } = require('./controllers/album.controller')
const { addCategory, listCategories, updateCategory, deleteCategory, getCategory } = require('./controllers/category.controller')
const { addTrack, listTracks, updateTrack, deleteTrack, getTrack, listTracksByAlbumId } = require('./controllers/track.controller')
const { signup, login, listUsers } = require('./controllers/user.controller')
const { verifyToken } = require('./middleware/auth.middleware')
const { validateAlbumRequest, validateCategoryRequest, validateTrackRequest, validateRegistrationRequest, validateLoginRequest } = require('./middleware/validations.middleware')
// ========================================================================================================================

router.get('/', (req, res) => { res.send("Your Route is working") })

router.post('/category',
    validateCategoryRequest,
    addCategory
)

router.get('/categories',
    listCategories
)

router.get('/category/:categoryId',
    getCategory
)

router.put('/category/:categoryId',
    updateCategory
)

router.delete('/category/:categoryId',
    deleteCategory
)

// ========================================================================================================================

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

// ========================================================================================================================

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

//====================================================================

router.get('/users',
    listUsers
)

router.post('/login',
    validateLoginRequest,
    login
)

router.post('/signup',
    validateRegistrationRequest,
    signup
)

module.exports = router 