/**DISTINCT 
 * Compute the number of distinct values in an array 
 */

const Distinct = (array) => {
  let filter = new Set(array);
  return filter.size; 
}

/**
 * BUBBLE SORT
 * Sort a list of positive integers in place increasing 
 * Input => [13, 4, 21, 12, 1, 56, 2, 7]
 * Output => [1, 2, 4, 7, 12, 13, 21, 56]
 */

const BubbleSort = (array) => {
  /** 
   * Iterate over the array starting at the last position 
   * for each iteration iterate over the array starting at 1 
   * for each element 
   * compare the element with it's previous element determining the greatest value 
   * if the element is the greatest swap the elements 
   * return the array 
  */ 
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (array[j - 1] > array[j]) {
        [array[j - 1], array[j]] = [array[j], array[j -1]]; 
      }
    }
  }
  return array; 
}

module.exports = {
  Distinct,
  BubbleSort
}; 