// Select color input
var currentColor = document.getElementById("colorPicker");

// Select size input
var height = getUrlVars()["height"];
var width = getUrlVars()["width"];

// When size is submitted by the user, call makeGrid()
makeGrid()

function makeGrid() {
	document.getElementById("inputHeight").value = height;
	document.getElementById("inputWidth").value = width;
		
	var table = document.getElementById("pixelCanvas");
	for (i = 0; i < height; i++) {
		var row = table.insertRow(i);
		for(j = 0; j < width; j++) {
			var cell = row.insertCell(j);
			cell.onclick = function() {
				fillCell(this);
			}
		}
	}
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function fillCell(cell) {
	cell.bgColor = currentColor.value;
}