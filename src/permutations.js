/**PERM CHECK
 * Check whether array is a permutation 
 * 
 */

const PermCheck = (array) => {
    /*
    sort the array [future implement quick sort instead of Array.sort()]
    check if the first element is 1 
    iterate over the sorted array 
    for each element 
      if the element plus one is not equal their next element 
      return 0 
    return 1 
    */
    let sortedArray = array.sort(); 
    if (sortedArray[0] !== 1) {
        return 0; 
    }
    for (let i = 0; i < sortedArray.length - 1; i++) {
        if (sortedArray[i] + 1 !== sortedArray[i + 1]) {
            return 0; 
        }
    }
    return 1;
}

module.exports = PermCheck; 