/*
Find Last Index
Iterate through an array in reverse, returning the index closest
to the end where the predicate truth test passes.

Try adding some tests.
One example could be what if the object is not found in the array
at all.

Example:
const users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
             {'id': 2, 'name': 'Ted', 'last': 'White'},
             {'id': 3, 'name': 'Matthew', 'last': 'McConaughey'},
             {'id': 4, 'name': 'Kanye', 'last': 'West'}];
_.findLastIndex(users, {
  name: 'Kanye'
});
=> 3
*/

// Will check to see if an array contains all of the elements a subset array
const arrayContainsAnotherArray = (array, subsetArr) => {
  // Instantiating a loop that will iterate through each element of the subset array
  for (let i = 0; i < subsetArr.length; i++) {
    // Checking to see if the indexOf each element in subsetArr exists in array
    // If a given element does not exist, the return value is -1
    if (array.indexOf(subsetArr[i]) === -1) {
      // If -1 is found, an element from subsetArr is not found in array so return false
      return false
    }
  }
  // If every element is found i.e. no indexOf checks return -1, each element of subsetArr
  // must exist in array
  return true
}

// You are checking the values from the key array not of the actual objects themselves

const valueMatch = (searchKeys, arrayElement, needle) => {
  // For a given key in the searchKeys array, check if that key value pair was a match for
  // arrayElement object and needle object 
  for (key of searchKeys) {
    // If the key value pair for the two objects is not the same, then the values must not match
    // so return false
    if (arrayElement[key] != needle[key]) return false
  }
  // If all of the key value pairs match then this must 
  return true
}


const findLastIndex = (array, needle) => {

  // Declaring the keys of needle we are looking for in array
  let searchKeys = Object.keys(needle)
  // Declaring our arrayKeys variable for later
  let arrayKeys = []

  // Setting up a loop that iterates in reverse through array
  // Must use array.length - 1, as arrays are zero-indexed
  // Must use i >= 0 for the same reason. The last index will be 0.
  for (let i = (array.length - 1); i >= 0; i--) {


    // Defining the keys that exist at this index in the array
    arrayKeys = Object.keys(array[i])
    // Checking to see if the arrayKeys at least include the searchKeys,
    // and checking for equality between each of the searchKeys that exist in array[i].
    // The array index should only return if BOTH of these conditions are met.
    if (arrayContainsAnotherArray(arrayKeys, searchKeys) && valueMatch(searchKeys, array[i], needle)) {
      return i
    }

  }

  return "Needle not found in array"

}

// Check your solution by running these tests: mocha last_index.js
const assert = require('assert');

describe('Find Last Index', () => {
  const objects = [
    {a: 0, b: 0},
    {a: 1, b: 1},
    {a: 2, b: 1},
    {a: 2, b: 2},
    {a: 0, b: 0}
  ];
  it('finds the last index', () => {
    assert.equal(findLastIndex(objects, {a: 0}), 4);
    assert.equal(findLastIndex(objects, {a: 2, b: 1}), 2);
  }),
  it('correctly handles non-existing keys in array', () => {
    assert.equal(findLastIndex(objects, {c: 1}), "Needle not found in array")
  }),
  it('correctly handles mismatching values for matching keys', () => {
    assert.equal(findLastIndex(objects, {a: 5}), "Needle not found in array");
  })
});
  