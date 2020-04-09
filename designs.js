// Select color input
var currentColor = document.getElementById("colorPicker");

// Get size from page URL parameters
var height = getUrlVars()["height"];
var width = getUrlVars()["width"];

// Update the input values  
document.getElementById("inputHeight").value = height;
document.getElementById("inputWidth").value = width;

// Get pixelCanvas
var table = document.getElementById("pixelCanvas");

// To make a grid
function makeGrid() {
	for (i = 0; i < height; i++) {
		var row = table.insertRow(i);
		for(j = 0; j < width; j++) {
			row.insertCell(j);
		}
	}
}

// Get the value of height and width submitted by a user through URL
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

// Fill a cell with the current color
function fillCell(cell) {
	cell.bgColor = currentColor.value;
}

// A height*width grid should appear, when users submit height and width
makeGrid();

// Click a cell, the cell is filled with the current color which users choose from the colorPicker
table.onclick = function(event) {
    if (event.target.nodeName === 'TD') {
        fillCell(event.target);
    }
};