const { signup, allUsers, removeUser, login } = require('./user.service')
const Response = require('../utils/response')

exports.signup = async (req, res) => {

    try {

        await signup(req.body)
        return Response.ok(res, 200, undefined, undefined)

    } catch (e) {
        return res.status(500).send(e)
    }

}

exports.login = async (req, res) => {

    try {

        const token = await login(req.body)
        return Response.ok(res, 200, undefined, { Bearer_token: token })

    } catch (e) {
        return res.status(500).send(e)
    }

}

exports.listUsers = async (req, res) => {

    try {
        const data = await allUsers()
        return res.json(data)
    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.deleteUser = async (req, res) => {

    try {
        await removeUser(req.params.userId)
        return Response.ok(res, 200, undefined, undefined)
    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

