const express = require('express');
const app = express();
const port = 8004;
const cors = require('cors');
const mongoose =  require('mongoose');

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const bookRoutes = require('./routes/book.routes');
bookRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));