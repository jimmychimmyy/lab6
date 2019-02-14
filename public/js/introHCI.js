'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	var url = "http://localhost:3000/project/" + idNumber;
		var project = "#project" + idNumber;
		$.get(url, function(data) {
			console.log("AJAX run!");
			console.log(data);
			console.log(project);
			var title = "<h3>" + data['title'] + "</h3>";
			console.log(title);
			var date = "<h4>" + data['date'] + "</h4>";
			var myImg = '<img src="' + data['image'] + '" class="detailsImage">';
			console.log(title + date);
			$(project).find(".details").append(title + date + myImg + data.summary);
		});

}

function ajaxMake(e) {
	e.preventDefault();

}

function addProject(result) {
  var projectHTML = '<a href="#" class="thumbnail">' +
    '<img src="' + result['image'] + '" class="img">' +
    '<p>' + result['title'] + '</p>' +
    '<p><small>' + result['date'] +
    '</small></p></a>'; 
}
