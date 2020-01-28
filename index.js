const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./server/routes/index')

require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', () => {
    console.log('MongoDB database connected!')
})
routes(app);
app.listen(process.env.PORT || 4000, () => console.log('App listening on 4000'));