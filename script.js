
function clearGrid() {
$("#container").remove();
$(document).ready(function(){
	$("body").append('<div id="container"></div>')
	var height = prompt("Please enter a height");
	var width = prompt("Please enter a width under 32");
	if(width > 31) {
		alert("You entered a number higher than 32.")
		clearGrid();
	}
	for(var i = 0; i< height; i++) {
		$("#container").append("<ul></ul>");
	}
	for(var i = 0; i< width; i++) {
		$("ul").append("<li></li>");
	}
	$("ul > li").hover(function(){
		$(this).addClass("triggered");
	});
	

	
});
}
clearGrid();