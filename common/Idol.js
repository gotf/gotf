'use strict';

class Idol {
	constructor(row, side, health) {
		this.row = row;
		this.side = side;
		this.health = health;
		this.maxHealth = health;
	}
}

module.exports = Idol;