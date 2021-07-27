const Joi = require('@hapi/joi');

exports.validateAlbumRequest = async(req, res, next) => {

    try {

        const Schema = Joi.object().keys({
            name: Joi.string().required(),
            description: Joi.string().required()
        })
    
        const {error} = Joi.validate(req.data, Schema)
        console.log(error)

        if(!error) return res.status(400).json(error)

        next()

    } catch(e){
        return res.status(500).json({ msg: e })
    }

}

exports.validateCategoryRequest = async(req, res, next) => {

    const Schema = Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required()
    })

    Schema.validate(req.data, (err, value) => {

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

    Schema.validate(req.data, Schema, (err, value) => {

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

    Schema.validate(req.body, (err, value) => {

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

    Schema.validate(req.data, (err, val) => {
        
        if(err) return res.status(400).json({
            status: 'error',
            message: 'Invalid request data',
            data: req.data
        })

        next()

    })

}