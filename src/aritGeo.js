
//whole script strict mode syntax
'use strict';

module.exports = {

/*the codes below determiines if an array entered is
an arithmetic progressiion of geometric progression
or if it is none of the two progressions*/

aritGeo: (array) => {

//checks if the entered value is an array, if it is not, it throws error
	if (Array.isArray(array) === false) {
		let error = "invalid input";
		return error;
	}
//checks if the array is an empty array
	else if (array === []) {
		return 0;
	}
//checks if the array contains non-numbers by looping through the array an returning the output
	else if (
		for (let i = 0; i >= array.length; i++) {
			if (typeof array[i] === "string") {
			var error = "Invalid"; 
		} 
	}) { return error; }


}


}