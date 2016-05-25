console.log("Instructions");

var makePyramid = function(input) {
	var output = "";

	for(var i = input; i > 0; i--) {
		output += "x";
	}

	return output;
}