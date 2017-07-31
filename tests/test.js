
	const assert = require('chai').assert;
	const firstApp = require('../src/aritGeo.js');

	describe("aritGeo", function() {

  describe("Determine what the sequence an array of numbers is: ", function() {

    describe("Ccheck if the argument is an array", function() {

      it("should return Invalid input for a non array", function() {
        assert.equal(aritGeo("Any other thing")).toEqual("Invalid Input");
      });

    });