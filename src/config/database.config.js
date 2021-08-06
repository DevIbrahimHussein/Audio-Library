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
const database = `mongodb+srv://${__config.mongo.user_db}:${__config.mongo.password_db}@bobshop-cluster.koemv.mongodb.net/test`
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

