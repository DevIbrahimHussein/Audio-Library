const express = require('express')
const router = express.Router()

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

router.delete('/user/:userId',
deleteUser
)

module.exports = router