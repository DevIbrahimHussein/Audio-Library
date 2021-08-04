const { isUserExist, signToken, signup, allUsers, createUserModel, removeUser } = require('../service/user.service')
const { sendWelcomeEmail } = require('../utils/helpers')

exports.signup = async (req, res) => {

    try {

        const model = await createUserModel(req.body)

        const userExist = await isUserExist(model)

        if (userExist) {
            return res.status(400).send({ 'msg': 'User already exists' })
        }

        const user = await signup(model)

        sendWelcomeEmail(user)

        return res.json(user)

    } catch (e) {
        return res.status(500).send(e)
    }

}

exports.login = async (req, res) => {

    try {

        const isExist = await isUserExist(req.body)

        if (!isExist)
            return res.status(400).json({
                msg: 'email or password is incorrect'
            })

        const token = signToken(req.body)

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

