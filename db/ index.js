require('dotenv').config();
const config = require('../config/config');
const mongoose = require('mongoose');

const db = mongoose.createConnection(process.env[config.database], {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
db.once('open', () => console.log(`Connected to ${config.database}.`));
db.on('error', () =>
    console.log(`Error connecting to the ${config.database}.`)
);

module.exports.db = db;
