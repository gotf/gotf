# gotf

## Running the game server

The game server implements the actual game logic, and communicates with the client using Socket.IO. This must be running for the game to be playable.

`cd game-server`

`npm install`

`node index.js`

## Testing the game client

`cd client`

`npm install`

`npm run-script debug`

Open http://localhost:8080/index.html in your browser.

`webpack-dev-server` script will automatically bundle the client files whenever they are changed.

The webpage can also be optionally reloaded whenever the bundle changes: visit http://localhost:8080/webpack-dev-server/index.html instead of the above URL.
