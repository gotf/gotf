'use strict';

const socketIoClient = require('socket.io-client');
const konva = require('konva');

const BoardDraw = require('./BoardDraw.js');
const Unit = require('../../common/Unit.js');

var socket = socketIoClient('http://localhost:62822');

const stage = new konva.Stage({
    container: 'canvas',
    width: 1000,
    height: 700
});

const boardDraw = new BoardDraw(3, 5);
stage.add(boardDraw.layer);
const unit = new Unit("star_watcher");


// force the stage to redraw 60 times every second, but no more
(function animate() {
    stage.draw();
    window.requestAnimationFrame(animate);
})();
