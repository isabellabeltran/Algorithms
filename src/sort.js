/**DISTINCT 
 * Compute the number of distinct values in an array 
 */

const Distinct = (array) => {
  let filter = new Set(array);
  return filter.size; 
}

module.exports = Distinct; 