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
            database,
            options
        )
        console.log(`Connected to Database`)
    } catch (err) {
        console.log('Failed to connect to db\nError: \n' + err)
    }

}

module.exports = databaseConnection

