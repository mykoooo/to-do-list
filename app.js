require('dotenv').config()

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const bodyParser = require("body-parser");

const connectDB = require('./server/config/db');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.static('public'));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})