/**
 * Main Loop
 */

$(document).ready(function() {
	//var ui = new InterfaceModel();
	/* var rest = new RestModel("");

	rest.assignObjectUri("http://ec2-54-81-14-120.compute-1.amazonaws.com/api/dummyview");
	object = rest.ajax();

	// Load page elements
	$.each(object, function(i) {

		switch($(this)[0].viewType) {
			case "button" :
				createButton($(this), "actions");
				break;
			case "editBox" :
				createEditBox($(this), "actions");
				break;
			default:
				console.log("Invalid object initialized");
				break;
		}
	}); */
	loadAjaxObjects("actions");
});

$(".refresh").click(function(e) {
	e.preventDefault();
	loadAjaxObjects("actions");
});

function createButton(obj, parentElement) {
	var query = "#"+parentElement;
	var html = "<button class='button'>"+obj[0].value+"</button>";
	$(query).append(html);
}

function createEditBox(obj, parentElement) {
	var query = "#"+parentElement;
	var html = "<input type='text' class='text' />";
	$(query).append(html);
	$(query + " .text").attr("value",obj[0].value);
}

function loadAjaxObjects(wrapperElement) {
	$("#"+wrapperElement).html("");

	var rest = new RestModel("");

	rest.assignObjectUri("http://ec2-54-81-14-120.compute-1.amazonaws.com/api/dummyview");
	object = rest.ajax();

	// Load page elements
	$.each(object, function(i) {

		switch($(this)[0].viewType) {
			case "button" :
				createButton($(this), wrapperElement);
				break;
			case "editBox" :
				createEditBox($(this), wrapperElement);
				break;
			default:
				console.log("Invalid object initialized");
				window.alert("Could not parse object!");
				break;
		}
	});
}