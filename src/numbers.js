/**
 * Number Algorithms 
 */

 /**
  * REVERSE STRING 
  * Given an integer return the reverse of the given number 
  * Input => 321
  * Output => 123 
  * Input => -452 
  * Output => -254
  * Make sure the number doesn't overflow if it does return 0 
  * Pseudocode 
  *  create a variable to hold the reverse number 
  *  convert the input to string 
  *  iterate over the string input starting at position 1 
  *    for each number add them to the front of the variable holding the number
  *  if the input string first character is equal to - 
  *    add the element to the front 
  *  else push the element 
  *  join the variable holding the new number and convert back to number 
  *  return the variable  
  */

  const reverseString = (number) => {
    let newNumber = []; 
    number = number.toString(); 
    for (let i = 1; i < number.length; i++) {
      newNumber.unshift(number[i]); 
    }
    if (number[0] === "-") {
      newNumber.unshift(number[0]);
    } else {
      newNumber.push(number[0]); 
    }
    newNumber = parseFloat(newNumber.join(''));
    if (newNumber > 2147483647 || newNumber < -2147483647) {
        return 0
    }
    return newNumber;
  };

  module.exports = reverseString; 