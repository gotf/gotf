class Card {
	constructor(id) {
		this.id = id;

		//TODO: fix that
		var that = this;
		parseJSON(id, that);

		function parseJSON(id, that) {
			let filePath = "common/cards/";
			
			loadJSONFile(that, filePath + id + ".json", function(data, that) {
				const jsonObject = JSON.parse(data);
				for(let key in jsonObject) {
					that[key] = jsonObject[key];
				}
			});
		}

		function loadJSONFile(that, fileName, callback) {
		    var xobj = new XMLHttpRequest();
		    xobj.overrideMimeType("application/json");
		    xobj.open('GET', fileName, true);
		    xobj.onreadystatechange = function() {
		        if (xobj.readyState == 4 && xobj.status == "200") {
		        	callback(xobj.responseText, that);
		        }
		    }
		    xobj.send(null);
		}
	}	
}

module.exports = Card;