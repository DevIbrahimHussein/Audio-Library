// laod express
const express = require('express')

// load app
global.app = express()

// load dotenv
require('dotenv')

// load config
global.__config = require('./src/config/app.config')

const http = require('http')

const server = http.createServer(app)

require('dotenv').config()

// --------------------------------------- SOCKET IO -----------------------------

const { Server } = require("socket.io")
const io = new Server(server)

io.on('connection', (req, res) => { 
  console.log('a user connected')
})

// ----------------------------------------------------------------

// load database
const databaseConnection = require('./src/config/database.config')

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

app.use('/api', require('./src/album/album.route'))
app.use('/api', require('./src/category/category.route'))
app.use('/api', require('./src/track/track.route'))
app.use('/api', require('./src/user/user.route'))

app.use('*', (_, res) => { res.status(404).json({ msg: 'API End Point doesn\'t exist' }) })

server.listen(
  __config.port,
  () => {
    console.log(`Audio-Library is running on port ${process.env.PORT}`)
  }
)