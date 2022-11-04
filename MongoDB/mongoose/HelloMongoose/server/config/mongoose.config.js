const mongoose = require("mongoose");

const database = 'userDB'

mongoose.connect(`mongodb://localhost/${database}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log(`Established a connection to ${database}`))
	.catch(err => console.log("Something went wrong when connecting to the database", err));