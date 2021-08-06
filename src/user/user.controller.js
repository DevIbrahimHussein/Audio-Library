const { signup, allUsers, removeUser } = require('./user.service')

exports.signup = async (req, res) => {

    try {

        const user = await signup(req.body)
        return res.json(user)

    } catch (e) {
        return res.status(500).send(e)
    }

}

exports.login = async (req, res) => {

    try {

        const token = login(req.body)

        return res.json({ Bearer_token: token })

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
        const data = await removeUser(req.params.userId)
        return res.status(200).json({ msg: data })
    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

