// Solve the following prompts using recursion 

/*
Calculate the factorial of a positive number 
Factorial is the product of all positive integers less than or equal than n 
It can be said that an empry set can only be ordered one way so 0! = 1 
Negative number should return null 
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

// console.log(factorial(3))

module.exports = factorial; 