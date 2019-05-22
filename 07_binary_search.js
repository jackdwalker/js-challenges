/*
Write a method which will act as a binary search which will find the 
position of a number in a sorted array and the number of steps required 
to find the position. 
When the array has an even number of values, the midpoint index should 
be rounded up.

Example:
    sortedArray = [1,5,8,12,20,21,35]
    searchValue = 8

    In this case the index returned would be 2 and it should take 3 steps. 
    In the first step, 3 is the midpoint index (value = 12). 
    In the second step 1 is the midpoint index (value = 5). 
    In the third and final step we are only left with 8 at index 2.

*/

function findMidpoint(sortedArray) {
    // Moved this calculation into it's own function to keep code DRY
    return Math.floor(sortedArray.length / 2)
}

function findIndex(sortedArray, searchValue) {
    // Finding the index within our sortedArray that contains an element equal to our searchValue
    for (index in sortedArray) {
        if (sortedArray[index] === searchValue) {
            // Had to parseInt the return as it was returning a string
            return parseInt(index)
        }
    }
}


function binarySearch(sortedArray, searchValue) {
    // Your code here

    // Accounting for an empty array being parsed into the function
    if (sortedArray.length === 0) {
        return "The array parsed into binarySearch is empty"
    }
    
    // Initialising the stepCounter & initial midpoint value for the sortedArray
    let stepCounter = 1 // We initialise to 1 as we need to do an midpoint calculation for the first comparison to searchValue
    let midpoint = findMidpoint(sortedArray)
    const indexOfSearchValue = findIndex(sortedArray, searchValue);    

    // Checking to see if the searchValue IS the midpoint value
    if (sortedArray[midpoint] === searchValue) {
        return [indexOfSearchValue, stepCounter]
    }

    // Until the midpoint is the searchValue and continue iterating over 
    while (sortedArray[midpoint] != searchValue) {
        if (sortedArray[midpoint] > searchValue) {
        // If the midpoint value is larger than the search value, chop off the top half of the array
            sortedArray = sortedArray.splice(0, midpoint)
        } else if (sortedArray[midpoint] < searchValue) {
        // If the midpoint value is smaller than the search value, chop off the bottom half of the array
            sortedArray = sortedArray.splice(midpoint, sortedArray.length)
        }
    
        // Recalculate the midpoint so the while loop can check it's assertion against the new midpoint for the spliced sortedArray
        midpoint = findMidpoint(sortedArray)
        stepCounter += 1
    }

    return [indexOfSearchValue, stepCounter]
}


let assert = require('assert')

describe('Count loops', function () {
    it('Should count one step when search values is in the middle', function () {
        assert.deepEqual([3, 1], binarySearch([1, 3, 7, 10, 14, 19, 31], 10))
    })
    it('Should count one step when search value is only value', function () {
        assert.deepEqual([0, 1], binarySearch([1], 1))
    })
    it('Should count length divided by two steps when value is at beginning', function () {
        assert.deepEqual([0, 3], binarySearch([1, 3, 7, 10, 14, 19, 31], 1))
    })
    it('Should count half the array length when value is at an end', function () {
        assert.deepEqual([6, 3], binarySearch([1, 3, 7, 10, 14, 19, 31], 31))
    })
})
