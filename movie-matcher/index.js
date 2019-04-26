require('dotenv').config()
const express = require('express')
const app = express()
// the above is calling the express function allowing it to be used
const bodyParser = require('body-parser')
// a bodyParser is required to read the body responses
const mongoose = require('mongoose')
const token = process.env.MOVIE_ACCESS_TOKEN
mongoose.Promise = require('bluebird')

const env = require('./config/environment')
const router = require('./config/routes')
const errorHandler = require('./lib/errorHandler')

mongoose.connect(env.db.development, { useNewUrlParser: true })
console.log('hello')
// the use of middleware makes sure we  will recieve a response
app.use(bodyParser.json())
app.use('/api', router)
app.use(errorHandler)

app.listen(env.port, () => console.log(`App is listening on port ${env.port}`))

module.exports = app
