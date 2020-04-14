const { db } = require('../ index');

var mongoose = require('mongoose');
var PairSchema = new mongoose.Schema({
    pairs: Array,
    originalList: Array,
});

db.model('Pair', PairSchema);

module.exports = db.model('Pair');
