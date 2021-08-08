/*
|--------------------------------------------------------------------------
| Database
|--------------------------------------------------------------------------
|
| Here is where you can
| connect to database.
|
*/

const mongoose = require('mongoose')
const database = __config.mongo.databaseURL
const options = __config.mongo.options

const databaseConnection = async () => {

    try {
        await mongoose.connect(
            'mongodb://127.0.0.1:27017/audio-library?directConnection=true&serverSelectionTimeoutMS=2000',
            options
        )
        console.log(`Connected to Database`)
    } catch (err) {
        console.log('Failed to connect to db\nError: \n' + err)
    }

}

module.exports = databaseConnection

