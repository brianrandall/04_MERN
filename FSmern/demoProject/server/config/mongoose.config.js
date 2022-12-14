const mongoose = require("mongoose");

const dbName = 'demoFSdb'

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection to ${dbName}`))
    .catch(err => console.log(`Something went wrong when connecting to ${dbName}`, err));
