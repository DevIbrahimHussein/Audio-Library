const express = require('express')
const router = express.Router()

// ========================================================================================================================

router.post('/category')

router.get('/categories')

router.put('/category')

router.delete('/category')

// ========================================================================================================================

router.post('/album')

router.get('/albums')

router.put('/album')

router.delete('/album')

// ========================================================================================================================

router.post('/song')

router.get('/songs')

router.put('/song')

router.delete('/song')


module.exports = router 