const insertionSort = (array) => {

  debugger

  let length = array.length;

    for(var i = 1; i < length; i++) {

      let current = array[i];

      for(var next = i - 1; array[next] > current; next--){
        
        array[next + 1] = array[next]
      }

      array[next + 1] = current

    }

    return array

  }

insertionSort([2, 1, 3, 5, 4]);

export default insertionSort

// loop through array

  // grab the value based on index position


  // compare current and next


  // if current > next then switch index place with next


    // next becomes current and run the compare again


  // loop through again with same as above


  // start from beginning and loop again


  // if no changes end loop


  // return sorted array
