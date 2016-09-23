'use strict';
const cards = require('../common/cards');
const enums = require('../common/enums.js');

class Card {
	constructor(id) {
		this.id = id;
		this.card = cards[id];
		if(this.card.rarity === enums.Rarity.COMMON) {
			console.log("YES");
		}
	}
}

module.exports = Card;