const chai = require('chai'); 
const expect = chai.expect;
const should = chai.should(); 
const sinon = require('sinon'); 
const { factorial, sum } = require('../src/recursion');

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
  });
  describe('Compute the sum of all integers in an array ', () => {
    it('should only take an array as a parameter ', () => {
      let spy = sinon.spy(sum); 
      spy([8, 9, 10]);
      expect(spy.firstCall.args[0]).to.eql([8, 9, 10]); 
    });
    it('should return a number  ', () => {
      expect(sum([2, 3, 4])).to.be.a('number'); 
    });
    it('should return the sum of all the values in the array ', () => {
      let spy = sinon.spy(sum);
      spy([5, 6, 7]);
      expect(spy.returnValues[0]).to.equal(18); 
    });
    it('should return the sum of negative integers ', () => {
      let spy = sinon.spy(sum);
      spy([-3, -6, -4, -5, -2]);
      expect(spy.returnValues[0]).to.equal(-20); 
    }); 
    it('should return the sum of positive and negative integers ', () => {
      let spy = sinon.spy(sum);
      spy([2, 6, -3, -10, 1]);
      expect(spy.returnValues[0]).to.equal(-4);
    });
    it('should return 0 if is an empty array ', () => {
      expect(sum([])).to.equal(0); 
    });
  });
});