require('dotenv').config();

var express = require('express');
var app = express();
var path = require('path');

var config = require('./config/config');

if (config.environmentName === 'development') {
    var cors = require('cors');
    var corsOptions = {
        origin: true,
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204,
        credentials: true,
    };
    app.use(cors(corsOptions));
}

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: false })); // to support URL-encoded bodies



app.use('/', express.static(path.join(__dirname, 'src', 'dist')));
app.use('/*', (req, res) => {
    res.sendFile(
        path.join(__dirname + 'src', 'dist', 'index.html')
    );
});

module.exports = app;
