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
}

module.exports = Distinct; 