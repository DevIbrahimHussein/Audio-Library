// const Joi = require('joi')
// Joi.objectID = require('joi-objectid')(Joi)

// const settingsConfig = require('./adminSettings.config')

// const adminSettingsValidator = {

//     updateAdminSettingsValidation: {
//         options: {
//             allowUnknownBody: false,
//             status: 400
//         },
//         body: {
//             paymentMethod: Joi.string().valid(settingsConfig.paymentMethod.tap, settingsConfig.paymentMethod.myFatoorah).required(),
//             smsType: Joi.string().valid(settingsConfig.smsType.twilio, settingsConfig.smsType.smsBox).required()
//         }
//     }
// }

// module.exports = adminSettingsValidator