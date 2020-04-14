const _ = require('lodash');
const baseConfiguration = require('../config/env/all');

const environmentSpecificConfiguration = require(`../config/env/${process.env
    .NODE_ENV || 'all'}`);

module.exports = _.merge(
    {},
    baseConfiguration,
    environmentSpecificConfiguration
);
