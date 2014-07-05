/**
 * REST Model
 */

/**
 * Represents the REST Model
 * @constructor
 */
function RestModel(uri) { 
	//If I don't put these properties somewhere, i'll lose my damn mind
	this.uri = uri;

	console.log("RestModel object created");
}

// Methods
/**
 * Defines a uri for the RestModel Object to work with.
 * @param {string} uri - a valid uri reference 
 * @returns {Boolean} 
 */
RestModel.prototype.assignObjectUri = function(uri) {
	// Validation - String

	// TODO Validation - URI elements
	// At the most, not having a valid Localized IETF or ICANN gTLD
	// Will throw this out the door.

	// Once validated, assign to field
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

	/* $.each(parsedObj, function(i) {
		intModel.generateObjectByViewType($(this),"action");
	}); */
	return parsedObj;
}