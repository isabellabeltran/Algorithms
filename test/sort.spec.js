const chai = require('chai'); 
const expect = chai.expect;
const sinon = require('sinon'); 
const {
  Distinct, 
  BubbleSort
} = require('../src/sort');

describe('Sort ', () => {
  describe('Distinct', () => {
    it('should only take an array as a parameter ', () => {
      let spy = sinon.spy(Distinct); 
      spy([1, 2, 3]);
      expect(spy.firstCall.args[0]).to.be.an('array');
    });
    it('should only take an array with integers as a parameter ', () => {
      let spy = sinon.spy(Distinct); 
      spy([1, 2, 3]);
      expect(spy.firstCall.args[0]).deep.equal([1, 2, 3]);
    });
    it('should only be called once ', () => {
      let spy= sinon.spy(Distinct); 
      spy([1, 2, 3]);
      expect(spy.callCount).to.equal(1);
    });
    it('should return an integer', () => {  
      expect(Distinct([1, 2, 1, 4, 3, 2])).to.be.a('number');
    });
    it('should return the number of distinct values in the array ', () => {
      expect(Distinct([1, 2, 1, 4, 3, 2])).equal(4); 
    });
  });
  describe('Bubble Sort ', () => {
    it('should only take an array as a parameter ', () => {
      let spy = sinon.spy(BubbleSort); 
      spy([31, 2, 3, 5]);
      expect(spy.firstCall.args[0]).to.be.an('array');
    });
  });
});