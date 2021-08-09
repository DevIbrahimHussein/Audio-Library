const Joi = require('joi')

exports.validateRegistrationRequest = async (req, res, next) => {

    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().required()
    })

    try {

        const { error } = schema.validate(req.body)

        if (error) return res.status(400).json({ msg: error.details[0].message })

        next()

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.validateLoginRequest = async (req, res, next) => {

    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().required()
    })

    try {

        const { error } = schema.validate(req.body)

        if (error) return res.status(400).json({ msg: error.details[0].message })

        next()

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.validateBlocking = async (req, res, next) => {

    const Schema = Joi.object({
        isBlocked: Joi.boolean().required(),
        email: Joi.string().required()
    })

    try {
        const { error } = Schema.validate(req.body)
        if (error) return res.status(400).json({ msg: error.details[0].message })
        next() 
    } catch(e){
        return res.status(500).json({ msg: e })
    }

}

exports.validateEmailResetPassword = async (req, res, next) => {

    const Schema = Joi.object({
        email: Joi.string().required()
    })

    try {
        const { error } = Schema.validate(req.body)
        if (error) return res.status(400).json({ msg: error.details[0].message })
        next() 
    } catch(e){
        return res.status(500).json({ msg: e })
    }

}

exports.resetPassword = async (req, res, next) => {

    const Schema = Joi.object({
        newPassword: Joi.string().required()
    })

    try {
        const { error } = Schema.validate(req.body)
        if (error) return res.status(400).json({ msg: error.details[0].message })
        next() 
    } catch(e){
        return res.status(500).json({ msg: e })
    }

}