# gotf

## Running the web server

The web server is responsible for serving the client files.

`cd web-server`

`npm install`

### Debugging with webpack-dev-server

webpack-dev-server will automatically bundle the client files whenever they are changed, as well as serve the static web files.

`npm run-script debug`

Visit http://localhost:8080/index.html. (To enable hot reloading whenever the bundle is updated, visit http://localhost:8080/webpack-dev-server/index.html instead.)

### Using hapi.js

Since webpack-dev-server can only serve static files, for public use or for dynamic webpages, the hapi.js web server should be used.

First, build the webpack bundle with `npm run-script build`

Then start the server: `node index.js`

Visit http://localhost:62822/.

## Running the game server

The game server implements the actual game logic, and communicates with the client using Socket.IO. This must be running for the game to be playable.

`cd game-server`

`npm install`

`node index.js`
