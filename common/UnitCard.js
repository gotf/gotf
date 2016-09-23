'use strict';

const Card = require('./Card.js');

class UnitCard extends Card {
	constructor(id) {
		super(id);
		this.initStats(this.card.attack, this.card.countdown, this.card.health, this.card.move, this.card.armor, this.card.subtypes);
	}

	initStats(attack, countdown, health, move = 1, armor = 0, subtypes = []) {
		this.attack = attack;
		this.countdown = countdown;
		this.health = health;
		this.move = this.card.move;
		this.curMove = move;
		this.armor = armor;
		this.subtypes = subtypes;
	}
}

module.exports = UnitCard;