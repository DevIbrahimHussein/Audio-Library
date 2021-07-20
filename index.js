/*
|--------------------------------------------------------------------------
| Audio Library
|--------------------------------------------------------------------------
|
| Audio Library is semi-ecommerce application that can show all products
| sort them and range by price, ... 
| you can add to favorite, add to cart, order many products by sending them through email
| 
*/


const express = require('express')

const app = express()

require('dotenv').config()

const databaseConnection = require('./src/config/database.config') 

const apis = require('./src/routes')

const logger = require('./src/middleware/logger.middleware')

const trimRequest = require('./src/middleware/trim-request.middleware')


databaseConnection()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger)
app.use(trimRequest)

app.use('/api', apis)

app.listen(
  process.env.PORT,
  () => {
    console.log(`Audio-Library is running on port ${process.env.PORT}`)
  }
)