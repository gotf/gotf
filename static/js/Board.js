'use strict';

const HEX_RADIUS = 52;
const STROKE_WIDTH = 2;
const STROKE_GAP = 2;
const SIDE_GAP = 50;

class Board {
	constructor(width, height) {
		this.layer = new Konva.Layer();

		this.tiles = []
		for (let sideNumber = 0; sideNumber < 2; sideNumber++) {
			const side = [];

			for (let rowNumber = 0; rowNumber < height; rowNumber++) {
				const row = [];

				for (let columnNumber = 0; columnNumber < width; columnNumber++) {
					const x = getTileXPosition(columnNumber, rowNumber, sideNumber, width);
					const y = getTileYPosition(rowNumber);

					const tile = new Tile(x, y, columnNumber, rowNumber);

					row.push(tile);
					this.layer.add(tile.group);
				}

				side.push(row);
			}

			this.tiles.push(side);
		}
	}
}

class Tile {
	constructor(x, y, column, row) {
		this.group = new Konva.Group({
			x: x,
			y: y
		});

		const hexagon = new Konva.RegularPolygon({
			sides: 6,
			radius: HEX_RADIUS - (STROKE_WIDTH / 2) - (STROKE_GAP / 2),
			stroke: "black",
			strokeWidth: STROKE_WIDTH,
			fill: "lightblue",
			opacity: 0.5
		});
		this.group.add(hexagon);

		const group = this.group;
		hexagon.on('mouseenter', function() {
			hexagon.opacity(1);
			// socket.emit('focusTile', this.col, this.row, this.side);
		});

		hexagon.on('mouseleave', function() {
			hexagon.opacity(0.5);
			// socket.emit('stopFocusTile', this.col, this.row, this.side);
		});

		const coordinateLabel = new Konva.Text({
			text: "x:" + column + " y:" + row,
			fontSize: 12,
			fontFamily: "Calibri",
			listening: false
		});
		this.group.add(coordinateLabel);
	}
}

function getTileXPosition(column, row, side, boardWidth) {
	const rowIsShifted = !(row % 2) !== !(side % 2); // shifted row alternates by row number and side
	const tileWidth = Math.sqrt(3) * HEX_RADIUS;
	const sideOffset = tileWidth * (boardWidth + 0.5) + SIDE_GAP - STROKE_GAP;

	let x = tileWidth / 2; // make whole tile appear on screen
	x += tileWidth * column; // base horizontal spacing
	x += side * sideOffset; // offset right side by the side's total width

	if (rowIsShifted) {
		x += tileWidth / 2;
	}

	return x;
}

function getTileYPosition(row) {
	return (1.5 * HEX_RADIUS * row) + HEX_RADIUS;
}
