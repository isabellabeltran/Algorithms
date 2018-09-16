const chai = require('chai'); 
const expect = chai.expect;
const sinon = require('sinon');
const { twoSum, twoSumLinear } = require('../src/array');

describe('Arrays ', () => {
  describe('Two Sum - Brute Force ', () => {
    it('should have an array as the first parameter ', () => {
      let spy = sinon.spy(twoSum);
      spy([2, 7, 11, 15], 9); 
      expect(spy.firstCall.args[0]).to.be.an('array'); 
    });
    it('should have a number as the second parameter ', () => {
      let spy = sinon.spy(twoSum);
      spy([2, 7, 11, 15], 9); 
      expect(spy.firstCall.args[1]).to.be.a('number'); 
    });
    it('should return an array ', () => {
      let spy = sinon.spy(twoSum);
      spy([2, 7, 11, 15], 9); 
      expect(spy.returnValues[0]).to.be.an('array');
    });
    it('should return an array with two numbers ', () => {
      let spy = sinon.spy(twoSum);
      spy([2, 7, 11, 15], 9); 
      spy.returnValues[0].forEach(number => {
        expect(number).to.be.a('number');
      });
    });
    it('should return the indices of the numbers that their sum equals the target', () => {
      let spy = sinon.spy(twoSum);
      spy([2, 7, 11, 15], 9); 
      expect(spy.returnValues[0]).to.deep.equal([0, 1]); 
    });
  });
  describe('Two Sum - Linear ', () => {
    it('should have an array as the first parameter ', () => {
      let spy = sinon.spy(twoSumLinear);
      spy([2, 7, 11, 15], 9); 
      expect(spy.firstCall.args[0]).to.be.an('array'); 
    });
    it('should have a number as the second parameter ', () => {
      let spy = sinon.spy(twoSumLinear);
      spy([2, 7, 11, 15], 9); 
      expect(spy.firstCall.args[1]).to.be.a('number'); 
    });
    it('should return an array ', () => {
      let spy = sinon.spy(twoSumLinear);
      spy([2, 7, 11, 15], 9); 
      expect(spy.returnValues[0]).to.be.an('array');
    });
    it('should return an array with two numbers ', () => {
      let spy = sinon.spy(twoSumLinear);
      spy([2, 7, 11, 15], 9); 
      spy.returnValues[0].forEach(number => {
        expect(number).to.be.a('number');
      });
    });
    it('should return the indices of the numbers that their sum equals the target', () => {
      let spy = sinon.spy(twoSumLinear);
      spy([2, 7, 11, 15], 9); 
      expect(spy.returnValues[0]).to.deep.equal([0, 1]); 
    });
  });
});