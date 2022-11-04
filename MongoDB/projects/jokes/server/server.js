const express = require('express')
const app = express()

require('./config/mongoose.config')

app.use(express.json(), express.urlencoded({ extended: true}))

const funnyRoutes = require('./routes/joke.routes')
funnyRoutes(app)

app.listen(27017, () => console.log('lol welcome to port 6969'))