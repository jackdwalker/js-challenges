/*
1. Given an array of numbers, determine whether the sum
of all of the numbers is odd or even.

Give your answer in string format as 'odd' or 'even'.

If the input array is empty consider it as: [0] (array with a zero).
2. What other edge cases should you consider? Add at least 2 more tests
for edge cases.
*/

function oddOrEven(array) {
    //enter code here
    
    // Filtering the array to ensure it only contains numbers
    filteredArray = array.filter(element => typeof element === "number");

    // If the array is empty we want to return even. Important to have here in function structure
    // as running the following reduce function on the filteredArray, if it contains no elements
    // a TypeError will be thrown
    if (filteredArray.length === 0) {
        return 'even';
    }

    // Reducing the array to get its sum and storing it
    arrSum = filteredArray.reduce((accumulator, currentValue) => accumulator + currentValue)

    // If the arrSum value is 0, either the values reduce to zero, or zero is the only element in the initial array.
    // Either way we were told to return 'even' in this corner case.
    if (arrSum === 0) {
        return 'even';
    }

    // An even number can be identified by dividing by 2, and having no remainder. Conversely an odd number
    // will always have remainder 1 when dividing by 2. The following line checks to see if arrSum has a remainder
    // when divided by 2, and returns even if the remainder is 0, or odd otherwise.
    return arrSum % 2 === 0 ? 'even' : 'odd';
}

var assert = require('assert');

describe('oddOrEven', function () {
    it('Should "odd" or "even" depending on the number', function () {
        assert.equal(oddOrEven([0]), 'even');
        assert.equal(oddOrEven([1]), 'odd')
        assert.equal(oddOrEven([]), 'even')
    });
    it('Even tests', function () {
        assert.equal(oddOrEven([0, 1, 5]), 'even')
        assert.equal(oddOrEven([0, 1, 3]), 'even')
        assert.equal(oddOrEven([1023, 1, 2]), 'even')
    });
    it('Negative Even tests', function () {
        assert.equal(oddOrEven([0, -1, -5]), 'even')
        assert.equal(oddOrEven([0, -1, -3]), 'even')
        assert.equal(oddOrEven([-1023, 1, -2]), 'even')
    });
    it('Odd tests', function () {
        assert.equal(oddOrEven([0, 1, 2]), 'odd')
        assert.equal(oddOrEven([0, 1, 4]), 'odd')
        assert.equal(oddOrEven([1023, 1, 3]), 'odd')
    });
    it('Negative Odd tests', function () {
        assert.equal(oddOrEven([0, -1, 2]), 'odd')
        assert.equal(oddOrEven([0, 1, -4]), 'odd')
        assert.equal(oddOrEven([-1023, -1, 3]), 'odd')
    });
});
