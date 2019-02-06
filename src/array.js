/**
 * Different algorithms with arrays 
 */

/**
 * TWO SUM - BRUTE FORCE  
 */
const twoSum = (arr, int) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === int) {
        return [i, j]; 
      }
    }
  }
}

/**
 * TWO SUM - LINEAR  
 */

const twoSumLinear = (arr, int) => {
  let dictionary = {}; 
  // for (let i = 0; i < arr.length; i++) {
  //   dictionary[arr[i]] = i;
  // }
  for (let j = 0; j < arr.length; j++) {
    let target = int - arr[j]; 
    if (dictionary.hasOwnProperty(target) && dictionary[target] !== j) {
      // return [j, dictionary[target]];
      return [dictionary[target], j]; 
    }
    //create the dictionary while looking for the numbers 
    dictionary[arr[j]] = j;
  }
}

/**
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
  For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

  First approach:
    iterate over the array and for each number 
      if the number is less than k 
        iterate over the rest of the numbers and for each number
          add them to i and if they are equal to k return true 
    if there is no matching sum return false   
 */


const addNumber = (arr, int) => {
  for (let i = 0; i < arr.length; i++) {
    if (i < int) {
      for (let j = 0; j < arr.length; j++) {
        if (i + j === int) {
          return true;
        }
      }
    }
  }
  return false; 
}

module.exports = {
  twoSum,
  twoSumLinear
}; 