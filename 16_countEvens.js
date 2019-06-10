/*

Working individually or in pairs write out differnt tests which will
count the number of even numbers in an array. 

Try to have at least three different tests which test differnt values
put into your method, such as an empty array.

Once you have done done this, write out the method and check if it passes. 

Example: countEvens = ([1,2,3,4]) => 2

Hint:
If your having trouble writing tests, look up some of the previous challenges or try
Google - mocha tests to get an idea.

*/

function isEven(number) {
    return number % 2 == 0 ? true : false
}

const countEvens = (arr) => {
    // Your code here
    
    filteredArr = arr.filter(element => typeof element === "number");
    
    let noOfEvens = 0;

    for (element of filteredArr) {
        if (isEven(element)) {
            noOfEvens += 1
        }
    }

    return noOfEvens
}
  
// Your tests here

var assert = require('assert')

describe('Initial tests', function() {
    it('Should return the correct number of even elements of an array', function() {
        assert.equal(countEvens([1, 2, 3, 4]), 2); 
        assert.equal(countEvens([1, 2, 3]), 1);
    })
    it('It should return zero for an empty array, and if no even digits are present', function() {
        assert.equal(countEvens([]), 0);
        assert.equal(countEvens([1, 3, 5, 7]), 0);
    })
    it('Should still function when non-number elements are present within the array', function() {
        assert.equal(countEvens(['s', 1, 2, 3, 4]), 2);
        assert.equal(countEvens([[1, 2], 1, 2]), 1);
    })
})
