const { signup, allUsers, removeUser, login, isBlocked, sendResetPasswordEmail, checkResetPasswordUrlValidation, resetPassword } = require('./user.service')
const Response = require('../utils/response')

exports.signup = async (req, res) => {

    try {
        await signup(req.body)
        return Response.ok(res)
    } catch (e) {
        if(e.message == Response.response_msgs.IS_EXIST)
            return Response.notOk(res, 409, e.message)
        return Response.notOk(res, 500, e.message)
    }

}

exports.login = async (req, res) => {

    try {
        const token = await login(req.body)
        return Response.ok(res, { Bearer_token: token })
    } catch (e) {
        if(e.message == Response.response_msgs.BLOCKED)
            return Response.notOk(res, 401, e.message)
        if(e.message == Response.response_msgs.INCORRECT)
            return Response.notOk(res, 400, e.message)
        return Response.notOk(res, 500, e.message)
    }

}

exports.listUsers = async (req, res) => {

    try {
        const data = await allUsers()
        return Response.ok(res, data)
    } catch (e) {
        return Response.notOk(res, 500, e.message)
    }

}

exports.deleteUser = async (req, res) => {

    try {
        await removeUser(req.params.userId)
        return Response.ok(res)
    } catch (e) {
        return Response.notOk(res, 500, e.message)
    }

}

exports.isBlocked = async(req, res) => {

    try {
        await isBlocked(req.body)
        return Response.ok(res)
    } catch (e) {
        return Response.notOk(res, 500, e.message)
    }

}

exports.sendResetPasswordEmail = async(req, res) => {

    try {
        await sendResetPasswordEmail(req.body.email)
        return Response.ok(res)
    } catch (e) {
        if(e.message == Response.response_msgs.NOT_EXIST)
            return Response.notOk(res, 400, e.message)
        if(e.message == Response.response_msgs.BLOCKED)
            return Response.notOk(res, 401, e.message)
        return Response.notOk(res, 500, e.message)
    }

}

exports.checkResetTokenTokenValidation = async(req, res) => {

    try {
        await checkResetPasswordUrlValidation(req.params.id, req.params.token)
        return Response.ok(res)
    } catch (e) {
        return Response.notOk(res, 500, e.message)
    }

}

exports.resetPassword = async(req, res) => {

    try {
        await resetPassword(req.params.userId, req.body.password)
        return Response.ok(res)
    } catch(e){
        return Response.notOk(res, 500, e.message)
    }

}
