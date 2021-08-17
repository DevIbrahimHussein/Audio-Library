const Joi = require('joi')
const Response = require('../utils/response')

exports.validateRegistrationRequest = async (req, res, next) => {

    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    })

    try {

        const { error } = schema.validate(req.body)

        if (error) return Response.notOk(res, 400,  { msg: error.details[0].message })
        next()

    } catch (e) {
        return Response.notOk(res, e.message)
    }

}

exports.validateLoginRequest = async (req, res, next) => {

    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    })

    try {

        const { error } = schema.validate(req.body)

        if (error) return Response.notOk(res, 400,  { msg: error.details[0].message })

        next()

    } catch (e) {
        return Response.notOk(res, e.message)
    }

}

exports.validateBlocking = async (req, res, next) => {

    const Schema = Joi.object({
        isBlocked: Joi.boolean().required(),
        email: Joi.string().required()
    })

    try {
        const { error } = Schema.validate(req.body)
        if (error) return Response.notOk(res, 400,  { msg: error.details[0].message })
        next() 
    } catch(e){
        return Response.notOk(res, e.message)
    }

}

exports.validateEmailResetPassword = async (req, res, next) => {

    const Schema = Joi.object({
        email: Joi.string().required()
    })

    try {
        const { error } = Schema.validate(req.body)
        if (error) return Response.notOk(res, 400,  { msg: error.details[0].message })
        next() 
    } catch(e){
        return Response.notOk(res, e.message)
    }

}

exports.resetPassword = async (req, res, next) => {

    const Schema = Joi.object({
        newPassword: Joi.string().required()
    })

    try {
        const { error } = Schema.validate(req.body)
        if (error) return Response.notOk(res, 400,  { msg: error.details[0].message })
        next() 
    } catch(e){
        return Response.notOk(res, e.message)
    }

}