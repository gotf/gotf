'use strict';

const hapi = require('hapi');
const inert = require('inert'); // hapi plugin to serve static files

const server = new hapi.Server();

webServer.connection({
    host: '0.0.0.0',
    port: 62822
});

server.register(inert, function(error) {
    if (error) {
        throw error;
    }
});

server.route({ // this route takes care of serving static files
    method: 'GET',
    path: '/scripts/{param*}',
    handler: {
        directory: {
            path: './scripts'
        }
    }
});

webServer.start(function(error) {
    if (error) {
        throw error;
    }

    console.log('Web server listening on port 62822!');
});
