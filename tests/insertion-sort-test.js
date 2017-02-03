const chai = require('chai');
const expect = chai.expect;

import insertionSort from '../scripts/insertion-sort'

describe('Insert-Sort', () => {

  it('grabs length of array', () => {
    expect(insertionSort([ 1, 2, 3])).to.have.lengthOf(3);
  });

  it('should return to me an array', () => {
    expect(Array.isArray(insertionSort([]))).to.be.true
  });

  it('should sort numbered array', ()=> {
    let array = [2, 1, 3, 5, 4];
    expect(insertionSort(array)).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should sort letter array', ()=> {
    let array = ['d', 'b', 'c', 'a'];
    expect(insertionSort(array)).to.deep.equal(['a','b','c','d']);
  });
});
