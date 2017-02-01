const chai = require('chai');
const expect = chai.expect;

import bubbleSort from '../scripts/bubble-sort'

describe('Bubble-Sort', () => {

  it('grabs length of array', () => {
    expect(bubbleSort([ 1, 2, 3])).to.have.lengthOf(3);
  });

  it('should return to me an array', () => {
    expect(Array.isArray(bubbleSort([]))).to.be.true
  });

  it('should sort numbered array', ()=> {
    let array = [2, 1, 3, 5, 4];
    expect(bubbleSort(array)).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should sort letter array', ()=> {
    let array = ['d', 'b', 'c', 'a'];
    expect(bubbleSort(array)).to.deep.equal(['a','b','c','d']);
  });
});
