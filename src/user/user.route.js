const express = require('express')
const router = express.Router()
const validation = require('../middleware/validations.middleware')
const controller = require('./user.controller')

router.get('/users',
    controller.listUsers
)

router.post('/login',
    validation.validateLoginRequest,
    controller.login
)

router.post('/signup',
    validation.validateRegistrationRequest,
    controller.signup
)

router.delete('/user/:userId',
    controller.deleteUser
)

module.exports = router