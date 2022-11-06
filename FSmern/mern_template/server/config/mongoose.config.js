const mongoose = require("mongoose");

const DATABASE = 'YOUR DATABASE NAME';

MONOGOOSE.connect(`mongodb://localhost/${DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection ${DATABASE}`))
    .catch(err => console.log(`Something went wrong when connecting to ${DATABASE}`, err));

