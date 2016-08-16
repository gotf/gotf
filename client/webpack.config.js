'use strict';

var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'scripts/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/scripts/',
        filename: 'game.js'
    }
};
