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

module.exports = twoSum; 