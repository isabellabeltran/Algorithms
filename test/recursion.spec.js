const chai = require('chai'); 
const expect = chai.expect;
const should = chai.should(); 
const sinon = require('sinon'); 
const factorial = require('../src/recursion');

describe('Recursion ', () => {
  describe('Calculate the factorial of a number', () => {
    it('should return an integer', () => {
      expect(factorial(3)).to.be.a('number'); 
    });
    it('should return the product of n', () => {
      expect(factorial(3)).to.equal(6); 
    });
    it('should return null for negative integers', () => {
      expect(factorial(-3)).to.be.a('null');
    });
    it('should return 1 for factorial of 0', () => {
      expect(factorial(0)).to.equal(1);
    });
    // it('should be invoke more than once ', () => {
    //   let spy = sinon.spy(factorial); 
    //   spy(4);
    //   // expect(spy.callCount).to.be.above(1); 
    //   console.log(spy);
    // });
  });
});