const express = require('express')

const app = express()

const apis = require('./src/routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apis)

app.listen(
  process.env.PORT,
  () => {
    console.log(`Audi-Library is running on port ${process.env.PORT}`)
  }
)