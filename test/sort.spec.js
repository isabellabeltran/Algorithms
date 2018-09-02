const chai = require('chai'); 
const expect = chai.expect;
const sinon = require('sinon'); 
const originalDistinct = require('../src/sort');

describe('Sort ', () => {
  describe('Distinct', () => {
    it('should only take an array as a parameter ', () => {
      let distinct = sinon.spy(originalDistinct); 
      distinct([1, 2, 3]);
      expect(distinct.firstCall.args[0]).to.be.an('array');
    });
    it('should only take an array with integers as a parameter ', () => {
      let distinct = sinon.spy(originalDistinct); 
      distinct([1, 2, 3]);
      expect(distinct.firstCall.args[0]).deep.equal([1, 2, 3]);
    });
    it('should only be called once ', () => {
      let distinct = sinon.spy(originalDistinct); 
      distinct([1, 2, 3]);
      expect(distinct.callCount).to.equal(1);
    });
    it('should return an integer', () => { 
      let distinct = originalDistinct([1, 2, 1, 4, 3, 2]); 
      expect(distinct).to.be.a('number');
    });
    it('should return the number of distinct values in the array ', () => {
      let distinct = originalDistinct([1, 2, 1, 4, 3, 2]); 
      expect(distinct).equal(4); 
    });
  });
});