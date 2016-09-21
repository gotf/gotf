'use strict';

class Card {
	constructor(id) {
		this.id = id;
		this.parseJSON();
	}

	parseJSON() {
		const filePath = "common/cards/";
		const self = this;

		this.loadJSONFile(filePath + this.id + ".json", function(data) {
			const jsonObject = JSON.parse(data);
			for(let key in jsonObject) {
				self[key] = jsonObject[key];
			}
		});
	}

	loadJSONFile(fileName, callback) {
	    let xobj = new XMLHttpRequest();
	    xobj.overrideMimeType("application/json");
	    xobj.open('GET', fileName, true);
	    xobj.onreadystatechange = function() {
	    	if (xobj.readyState == 4 && xobj.status == "200") {
	    		callback(xobj.responseText);
	    	}
	    }
	    xobj.send(null);
	}
}

module.exports = Card;