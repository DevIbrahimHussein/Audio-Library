const express = require('express')
const router = express.Router()
const validation = require('./user.validator')
const controller = require('./user.controller')
const middleware = require('../middleware/auth.middleware')

router.get('/users',
    middleware.verifyToken,
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
    middleware.verifyToken,
    controller.deleteUser
)

router.post('/user/blocked',
    middleware.verifyToken,
    validation.validateBlocking,
    controller.isBlocked
)

router.post('/user/reset/password',
    validation.validateEmailResetPassword,
    controller.sendResetPasswordEmail
)

router.get('/user/:id/token/:token', 
    controller.checkResetTokenTokenValidation,
)

router.post('/user/new/password/',
    validation.resetPassword,
    controller.resetPassword
)

module.exports = router