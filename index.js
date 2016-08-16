'use strict';

const hapi = require('hapi');
const inert = require('inert'); // hapi plugin to serve static files
const socketIo = require('socket.io');

const server = new hapi.Server();

server.connection({
    host: '0.0.0.0',
    port: 62822
});

server.register(inert, () => {});

server.route({ // this route takes care of serving static files
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: './static'
        }
    }
});

server.start((error) => {
    if (error) {
        throw error;
    }

    console.log('Server listening on port 62822!');
});

const socketServer = socketIo(server.listener);

socketServer.on('connection', function(socket) {
    console.log('hello world');
});
