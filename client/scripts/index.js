'use strict';

const socketIoClient = require('socket.io-client');
const konva = require('konva');

const Board = require('./Board.js');
const Card = require('../common/Card.js');

var socket = socketIoClient('http://localhost:62822');

const stage = new konva.Stage({
    container: 'canvas',
    width: 1000,
    height: 700
});

const board = new Board(3, 5);
stage.add(board.layer);
const card = new Card("star_watcher");


// force the stage to redraw 60 times every second, but no more
(function animate() {
    stage.draw();
    window.requestAnimationFrame(animate);
})();
