/**
 * REST Model
 */

/**
 * Represents the REST Model
 * @constructor
 */
function RestModel(uri) { 
	this.uri = uri;

	console.log("RestModel object created");
}

/**
 * Defines a uri for the RestModel Object to work with.
 * @param {string} uri - a valid uri reference 
 * @returns {Boolean} 
 */
RestModel.prototype.assignObjectUri = function(uri) {
	this.uri = uri;
}

/**
 * Executes an ajax call and then passes the call to InterfaceModel
 */
RestModel.prototype.ajax = function() {
	var parsedObj;

	$.ajax({
		url: this.uri,
		async: false,
		success: function(data, textStatus, jqXHR) {
			parsedObj = data;
		},
		error: function(jqXHR, textStatus, errorThrown) {
			window.alert("Fatal error! "+errorThrown);
		},
	});
	
	return parsedObj;
}