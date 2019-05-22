/*
Largest Number
Write a method that will take an array of numbers
and return whichever is the largest.

Test your solution:
mocha 02_largestNumber.js

Question: Why does the test pass for the third (last) test 
with no changes to the function?
*/


// METHOD 1:

// return arr.reduce (function (a,b){   
//     Math.max(a, b);
// });

// METHOD 2:

// return Math.max.apply(null, arr);


// METHOD 3:

// return Math.max(...arr)


function largestNumber(arr) {
    // Your code here
    if (arr.length === 0) {
        return null
    };

    let filteredArr = arr.filter(element => typeof element === "number");

    return Math.max(...filteredArr);
};

var assert = require('assert');

describe('largestNumber', function () {
    it('should return the largest number', function () {
        assert.equal(10, largestNumber([5, -2, 10]));
    });
    it('should ignore invalid array entries', function () {
        assert.equal(10, largestNumber([10, 10, 's']));
    });
    it('should return null if the array is empty', function () {
        assert.equal(null, largestNumber([]));
    });
});
