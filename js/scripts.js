console.log("Instructions");

var makePyramid = function(input) {
	var output = "\n";

	for(var i = 0; i < input; i++) {
		for(var j = input - 2 - i; j >= 0; j--) {
			output += " ";
		}

		output += "x";
		output += "\n";
	}

	return output;
}