const Joi = require('joi')


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