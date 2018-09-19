const chai = require('chai'); 
const expect = chai.expect;
const sinon = require('sinon');
const reverseString = require('../src/numbers');

describe('Number Algorithms ', () => {
  describe('Reverse String ', () => {
    it('should only take numbers as a parameter ', () => {
      let spy = sinon.spy(reverseString);
      spy(9518);
      expect(spy.firstCall.args[0]).to.be.a('number');
    });
    it('should return type of number ', () => {
      let spy = sinon.spy(reverseString);
      spy(-55);
      expect(spy.returnValues[0]).to.be.a('number');
    });
    it('should return the reverse of the given number ', () => {
      let spy = sinon.spy(reverseString);
      spy(9518);
      expect(spy.returnValues[0]).to.equal(8159);
    });
    it('should return a negative number if the given input is negative ', () => {
      let spy = sinon.spy(reverseString);
      spy(-4321);
      expect(spy.returnValues[0]).to.equal(-1234);
    });
    it('should return zero if the number overflows ', () => {
      let spy = sinon.spy(reverseString);
      spy(2147483648);
      expect(spy.returnValues[0]).to.equal(0);
    });
  });
});