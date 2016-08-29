'use strict';

const hapi = require('hapi');
const inert = require('inert'); // hapi plugin to serve static files

const server = new hapi.Server();

server.connection({
    host: '0.0.0.0',
    port: 62822
});

server.register(inert, function(error) {
    if (error) {
        throw error;
    }
});

server.route({ // serve home page
    method: 'GET',
    path: '/',
    handler: {
        file: 'index.html'
    }
});

server.route({ // serve javascript files
    method: 'GET',
    path: '/scripts/{param*}',
    handler: {
        directory: {
            path: './scripts'
        }
    }
});

server.start(function(error) {
    if (error) {
        throw error;
    }

    console.log('Web server listening on port 62822!');
});
