const Joi = require('joi')

exports.validateAlbumRequest = async (req, res, next) => {

    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required()
    })

    try {

        const { error } = schema.validate(req.body)

        if (error) return res.status(400).json({ msg: error.details[0].message })

        next()

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.validateCategoryRequest = async (req, res, next) => {

    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required()
    })

    try {

        const { error } = schema.validate(req.body)

        if (error) return res.status(400).json({ msg: error.details[0].message })

        next()

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.validateTrackRequest = async (req, res, next) => {

    const schema = Joi.object({
        name: Joi.string().required(),
        singer: Joi.string().required(),
        category: Joi.string().required(),
        album: Joi.string().required()
    })

    try {

        const { error } = schema.validate(req.body)

        if (error) return res.status(400).json({ msg: error.details[0].message })

        next()

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

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