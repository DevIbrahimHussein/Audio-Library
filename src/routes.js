const express = require('express')
const router = express.Router()

// ========================================================================================================================

router.post('/category')

router.get('/categories')

router.put('/category/:categoryId')

router.delete('/category/:categoryId')

// ========================================================================================================================

router.post('/album')

router.get('/albums')

router.put('/album/:categoryId')

router.delete('/album/:categoryId')

// ========================================================================================================================

router.post('/song')

router.get('/songs')

router.put('/song/:songId')

router.delete('/song:SongId')


module.exports = router 