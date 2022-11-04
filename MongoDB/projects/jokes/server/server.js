const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('./config/mongoose.config')

app.use(express.json(), express.urlencoded({ extended: true}))

const funnyRoutes = require('./routes/joke.routes')
funnyRoutes(app)

app.listen(6969, () => console.log('lol welcome to port 6969'))