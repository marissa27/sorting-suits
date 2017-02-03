const merge = (arrayLeft, arrayRight) => {

  let completedArray = [];

  while(arrayLeft.length && arrayRight.length) {
    if (arrayLeft[0] < arrayRight[0]) {
      completedArray.push(arrayLeft.shift())
    } else if (arrayRight[0] < arrayLeft[0]) {
      completedArray.push(arrayRight.shift())
    }
  }

  return completedArray.concat(arrayLeft).concat(arrayRight);
}

  const mergeSort = (array) => {
    if(array.length < 2) {
      return array;
}
      let middle = Math.floor(array.length / 2);
      let arrayLeft = array.slice(0,middle);
      let arrayRight = array.slice(middle,array.length);

        return merge(mergeSort(arrayLeft), mergeSort(arrayRight));
    }


  mergeSort([5,4,2,1,3])

  export default mergeSort
