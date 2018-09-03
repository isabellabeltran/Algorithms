const chai = require('chai'); 
const expect = chai.expect;
const sinon = require('sinon');
const PermCheck = require('../src/permutations');

describe('Permutations ', () => {
  describe('PermCheck ', () => {
    it('should take in an array as a parameter ', () => {
      let spy = sinon.spy(PermCheck); 
      spy([2, 3, 4]); 
      expect(spy.firstCall.args[0]).to.be.an('array');
    });
    it('should return 0 if the first element in the array is not 1 ', () => {
      expect(PermCheck([2, 3, 4])).to.equal(0); 
    });
    it('should return 0 if the array is not a permutation ', () => {
      expect(PermCheck([1, 3, 4])).to.equal(0);
    });
    it('should return 1 if the array is a permutation ', ()=> {
      expect(PermCheck([1, 2, 3, 4])).to.equal(1);
    });
  });
});