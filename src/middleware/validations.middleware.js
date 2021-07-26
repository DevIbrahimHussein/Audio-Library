const Joi = require('joi')

exports.validateAlbumRequest = async(req, res, next) => {

    const Schema = Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required()
    })

    Joi.validate(req.data, Schema, (err, value) => {

        if(err) return res.status(400).json({
            status: 'error',
            message: 'Invalid request data',
            data: req.data
        })

        next()

    })

}

exports.validateCategoryRequest = async(req, res, next) => {

    const Schema = Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required()
    })

    Joi.validate(req.data, Schema, (err, value) => {

        if(err) return res.status(400).json({
            status: 'error',
            message: 'Invalid request data',
            data: req.data
        })

        next()

    })

}

exports.validateTrackRequest = async(req, res, next) => {

    const Schema = Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required()
    })

    Joi.validate(req.data, Schema, (err, value) => {

        if(err) return res.status(400).json({
            status: 'error',
            message: 'Invalid request data',
            data: req.data
        })

        next()

    })

}

exports.validateRegistrationRequest = async(req, res, next) => {

    const Schema = Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).alphanum().required()
    })

    Joi.validate(req.data, Schema, (err, value) => {

        if(err) return res.status(400).json({
            status: 'error',
            message: 'Invalid request data',
            data: req.data
        })

        next()

    })

}

exports.validateLoginRequest = async(req, res, next) => {

    const Schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })

    Joi.validate(req.data, Schema, (err, val) => {
        
        if(err) return res.status(400).json({
            status: 'error',
            message: 'Invalid request data',
            data: req.data
        })

        next()

    })

}