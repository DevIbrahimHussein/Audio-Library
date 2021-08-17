const { validate, ValidationError, Joi } = require('express-validation')
const Response = require('../utils/response')

exports.validateAlbumRequest = async (req, res, next) => {

    const schema = {
        body: Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required()
        })
    }

    try {

        const { error } = validate(schema)

        if (error) return Response.notOk(res, error.details[0].message )

        next()

    } catch (e) {
        return Response.notOk(res, e.message)
    }

}