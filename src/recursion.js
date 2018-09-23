// Solve the following prompts using recursion 

/**
 * 1. Factorial 
 * Calculate the factorial of a positive number 
 * Factorial is the product of all positive integers less than or equal than n 
 * It can be said that an empry set can only be ordered one way so 0! = 1 
 * Negative number should return null 
 * Input => integer 
 * Output => integer 
 */

const factorial = (n) => {
  if (n < 0) {
    return null; 
  } 
  if (n === 0) {
    return 1; 
  }
  if (n === 1) {
    return n; 
  }
  return n * factorial(n - 1); 
}

/**
 * 2. Sum 
 * Compute the sum of all integers in an array
 * Input => array [1, 2, 3]
 * Output => integer 6  
 */

const sum = (array) => { 
  if (array.length === 0) {
    return 0; 
  }
  return array[0] + sum(array.slice(1)); 
}

/**
 * 3. Sum Below
 * Compute the sum of all the integers below the given integer 
 * Input => 10
 * Output => 45  
 */

const sumBelow = (n) => {

}

module.exports = {
  factorial,
  sum
}; 

