
//whole script strict mode syntax
'use strict';

/*the codes below determiines if an array entered is
an arithmetic progressiion of geometric progression
or if it is none of the two progressions*/

module.exports = function aritGeo(array) {

//checks if the entered value is an array, if it is not, it throws error
	if (Array.isArray(array) === false) {
		let error = "Invalid Input";
		return error;
	}
//checks if the array is an empty array
	else if (array.length === 0) {
		return 0;
	}

//implementing the formula for arithmetic progression a_n = a + (n-1)d
//where a_n is the nth term, a is the first elememnt of the array
//n is the number of the array, d is the common difference
	else if (array[array.length-1] === array[0] + (array.length - 1)*(array[1] - array[0]) ) {
		return "Arithmetic";
	}
//implementing the formula for geometric progression a_n = a*math.pow(r, n-1)
//where a_n is the nth element of the array, a is the first element of the array
//r is the common ratio of the elements of the array.

	else if (array[array.length-1] === array[0] * Math.pow(array[2]/array[1], array.length - 1)) {
		return "Geometric";
	}

	else {
		return -1;
	}

}