/*
1. Write a function, "persistence", that takes in a positive parameter "num"
and returns its multiplicative persistence, which is the number of times
you must multiply the digits in num until you reach a single digit.

Examples:
persistence(39) === 3 
Because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit

persistence(999) === 4 
Because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and 1*2 = 2

2. What are some corner cases you could test? Write at least two.
*/

function persistence(num) {
    // Converting our number into an array of digits
    let numArr = num.toString(10).split('').map(Number)

    // Initialising the numArrProduct variable and our multiplication persistence value
    let numArrProduct
    let persistenceVal = 0
    
    // We want our persistence calculation to continue while the number is greater than 1 digit (i.e. numArr
    // is longer than 1)
    while (numArr.length > 1) {

        // Iterating over our array of 'num' digits, finding their product
        for (index in numArr) {
            // If the digit is the first of the array, assign it's value to numArrProduct
            // We cannot simply initialise numArrProduct and += to it like we normally
            // would with most accumulators, as doing so will always return zero.
            // e.g. if numArrProduct = 0 -> numArrProduct *= numArr[index] == 0 * numArr[index] --> 0
            if (index == 0) {
                numArrProduct = numArr[index]
            } else {
            // Continue to multiply every other digit and find the numArr product
                numArrProduct *= numArr[index]
            }
        }

        // Increment the persistence value  
        persistenceVal += 1

        // Re-assign numArr to the new numArrProduct, as an array of digits
        numArr = numArrProduct.toString(10).split('').map(Number)
    }

    // Now that the number is a single digit we can return the persistenceVal
    return persistenceVal
}


var assert = require('assert');

describe('Initial Tests', function () {
    it('Should return a single digit number', function () {
        assert.equal(persistence(39), 3);
        assert.equal(persistence(25), 2);
        assert.equal(persistence(999), 4);
    })
    it('Should return zero if num is a one digit number', function () {
        assert.equal(persistence(4), 0);
        assert.equal(persistence(9), 0);
    })
});
