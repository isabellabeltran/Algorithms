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

module.exports = {
  twoSum,
  twoSumLinear
}; 