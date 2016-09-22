'use strict';

class Card {
	constructor(id) {
		this.id = id;
		this.parseJSON();
	}

	parseJSON() {
		//TODO: Fix fileloading, 404 File Not found
		const filePath = "../common/cards/";

		this.loadJSONFile(filePath + this.id + ".json", (data) => {
			console.log(data);
			const jsonObject = JSON.parse(data);
			for(let key in jsonObject) {
				this[key] = jsonObject[key];
			}
		});
	}

	loadJSONFile(filePath, callback) {
	    let xobj = new XMLHttpRequest();
	    xobj.overrideMimeType("application/json");
	    xobj.open('GET', filePath, true);
	    xobj.onreadystatechange = function() {
	    	if (xobj.readyState == 4 && xobj.status == "200") {
	    		callback(xobj.responseText);
	    	}
	    }
	    xobj.send(null);
	}
}

module.exports = Card;