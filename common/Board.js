'use strict';

const Idol = require('./Idol.js');

class Board {
	constructor(width = 3, height = 5) {
		this.initIdols(height);
	}

	initIdols(height, side) {
		this.idols = [];
		for(let i = 0; i < 2; i++) {
			const side = [];
			for(let j = 0; j < height; j++) {
				side.push(new Idol());
			}
			this.idols.push(side);
		}
	}
}

module.exports = Board;