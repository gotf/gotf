'use strict';

const stage = new Konva.Stage({
    container: 'canvas',
    width: 1000,
    height: 700
});

const board = new Board(3, 3);
stage.add(board.layer);

// force the stage to redraw 60 times every second, but no more
(function animate() {
    stage.draw();
    window.requestAnimationFrame(animate);
})();
