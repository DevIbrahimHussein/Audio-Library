/*
|--------------------------------------------------------------------------
| Database
|--------------------------------------------------------------------------
|
| Here is where you can
| connect to database.
|
*/

require('dotenv').config()
const mongoose = require('mongoose')
const database = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@bobshop-cluster.koemv.mongodb.net/test`

const databaseConnection = async () => {

    try {
        await mongoose.connect(
            database,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            }
        )
        console.log(`Connected to Database`)
    } catch (err) {
        console.log('Failed to connect to db\nError: \n' + err)
    }

}

module.exports = databaseConnection

