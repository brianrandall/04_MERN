const mongoose = require('mongoose')

const database = 'jokeCentral'

mongoose.connect('mongodb://localhost/jokeCentral', 
{
    useNewUrlPaser: true, 
    useUnifiedTopology: true
})
    .then(() => console.log(`welcome to ${database}`))
    .catch(err => console.log(`you got lost on your way to ${database}, try again`))