// laod express
const express = require('express')
// load app
const app = express()

const http = require('http')

const server = http.createServer(app)

require('dotenv').config()
// load database
const databaseConnection = require('./src/config/database.config')

const apis = require('./src/routes')

const logger = require('./src/middleware/logger.middleware')

const trimRequest = require('./src/middleware/trim-request.middleware')

// const io = require('socket.io')(server)
  
// // make socket.io globally access
// global.io = io 

// connect to db
databaseConnection()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger) // for tracking
app.use(trimRequest) // for security reasons

app.use('/api', apis)
app.use('*', (_, res) => { res.status(404).json({ msg: 'API End Point doesn\'t exist' }) })

server.listen(
  process.env.PORT,
  () => {
    console.log(`Audio-Library is running on port ${process.env.PORT}`)
  }
)