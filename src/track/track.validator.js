const Joi = require('joi')
const Response = require('../utils/response')

exports.validateTrackRequest = async (req, res, next) => {

    const schema = Joi.object({
        name: Joi.string().required(),
        singer: Joi.string().required(),
        category: Joi.string().required(),
        album: Joi.string().required()
    })

    try {

        const { error } = schema.validate(req.body)

        if (error) return Response.notOk(res, 400,  { msg: error.details[0].message })

        next()

    } catch (e) {
        return Response.notOk(res, e.message)
    }

}