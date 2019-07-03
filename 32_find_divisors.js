//Find the divisors!
/*
Problem Description: Create a function named divisors that takes an integer and returns an array with all of the 
integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime'
(use Either String a in Haskell).
Example:
divisors(12); //should return [2,3,4,6]
divisors(25); //should return [5]
divisors(13); //should return "13 is prime"
You can assume that you will only get positive integers as inputs.
*/

function divisors(integer) {
    // The largest divisor of an integer will be half of it's size
    // as two is the next smallest divisor after 1
    // .:. we should compare an array of integers > 50% of the 
    // size of the argument.

    // Calculate half of integer. We take the floor as odd numbers will create decimals
    // which will break our range creation below.
    halfInteger = Math.floor(integer / 2)

    // Creating an array of integers from 0 through halfInteger. We add 1 to include the maximum
    // possible divisor e.g. 1, 2, 3, 4 (if integer == 8). W/out the range would be 1, 2, 3.
    possibleDivisorArray = [...Array(halfInteger + 1).keys()]

    // Removing the 0/1 from the front of the array as they aren't needing to be tested
    // in the iterator as divisors
    possibleDivisorArray.splice(0, 2)

    // Filtering our possible divisors for those that leave no remainder upon dividing our integer
    // This is the definition of a divisor
    divisorArray = possibleDivisorArray.filter(element => integer % element == 0)

    // If the divisorArray is not empty return it. If it is, it must be prime.
    return divisorArray.length > 0 ? divisorArray : `${integer} is prime`
    
}

console.log(divisors(8))
console.log(divisors(13))
console.log(divisors(15))
console.log(divisors(234))
console.log(divisors(789))