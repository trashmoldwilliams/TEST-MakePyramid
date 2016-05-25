console.log("To make a pyramid, type 'makePyramid(x)' into the console, with 'x' representing the integer value of rows the pyramid will have.");

var makePyramid = function(input) {
	var output = "\n";

	for(var i = 0; i < input; i++) {

		//Add left margin
		for(var j = input - 2 - i; j >= 0; j--) {
			output += " ";
		}

		//Fill out row
		output += "x";
		for(var j = i; j > 0; j--) {
			output += " x";
		}

		//End line
		output += "\n";
	}

	return output;
}