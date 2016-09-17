'use strict';

const socketIo = require('socket.io');

const server = new socketIo();

server.on('connection', function(socket) {
    console.log('hello world');
});

module.exports = server;
