require('dotenv').config()
const jwt = require('jsonwebtoken')

exports.verifyToken = async (req, res, next) => {

    const token = req.headers["token"] || req.body.token || req.query.token

    if (!token) {
        return Response.notOk(res, 403,  { msg: 'A token is required for authentication' })
    }

    try {
        const decoded = await jwt.verify(token, process.env.JwtSECRET)
        req.user = decoded
    } catch (err) {
        return Response.notOk(res, 401,  { msg: 'Invalid Token' })
    }

    return next()
}
