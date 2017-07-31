
	const assert = require('chai').assert;
	const firstApp = require('../src/aritGeo.js');

	describe("aritGeo", function() {

  describe("Determine what the sequence an array of numbers is: ", function() {

    describe("Check if the argument is an array", function() {

      it("should return Invalid input for a non array", function() {
        assert.equal(aritGeo("Any other thing")).toEqual("Invalid Input");
      });

    });

    describe("Case for an empty array", function() {

      it("should return 0 for an empty array", function() {
        assert.equal(aritGeo([])).toEqual(0);
      });

    });

    describe("Case for a non-number array", function() {

      it("should return invalid for a non-number array", function() {
        assert.equal(aritGeo(['book', '4', '10'])).toEqual("invalid");
      });

      it("should return invalid for a non-number array", function() {
        assert.equal(aritGeo(['book', 'height', 'i'])).toEqual("invalid");
      });

    });

    describe("Case for an arithmetic sequence", function() {

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        assert.equal(aritGeo([2, 4, 6, 8, 10])).toEqual('Arithmetic');
      });

      it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {
        assert.equal(aritGeo([5, 11, 17, 23, 29, 35, 41])).toEqual('Arithmetic');
      });

      it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
        assert.equal(aritGeo([15, 10, 5, 0, -5, -10])).toEqual('Arithmetic');
      });

    });

    describe("Case for a geometric sequence", function() {

      it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
        assert.equal(aritGeo([2, 6, 18, 54, 162])).toEqual('Geometric');
      });

      it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {
        assert.equal(aritGeo([0.5, 3.5, 24.5, 171.5])).toEqual('Geometric');
      });

      it("should return `Geometric` for [−128, 64, −32, 16, −8]", function() {
        assert.equal(aritGeo([-128, 64, -32, 16, -8])).toEqual('Geometric');
      });

    });

    describe("Case for neither arithmetic nor geometric sequence", function() {

      it("should return -1 for [1, 2, 3, 5, 8]", function() {
        assert.equal(aritGeo([1, 2, 3, 5, 8])).toEqual(-1);
      });

      it("should return -1 for [1, 3, 6, 10, 15]", function() {
        assert.equal(aritGeo([1, 3, 6, 10, 15])).toEqual(-1);
      });

      it("should return -1 for [1, 8, 27, 64, 125]", function() {
        assert.equal(aritGeo([1, 8, 27, 64, 125])).toEqual(-1);
      });
      
    });
  });

})