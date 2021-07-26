const mongoose = require("mongoose")

module.exports = {

    convertToObject(strId){
        return mongoose.Types.ObjectId(strId)
    }

}