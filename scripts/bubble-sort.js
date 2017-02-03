const bubbleSort = (array) => {

  debugger

    do {

      var sort = true;

      array.forEach(function(currentValue,index,array) {

        if (currentValue > array[index + 1]) {

          sort = false;

          array[index] = array[index + 1];

          array[index + 1] = currentValue;

        }
      })

    } while (!sort);

    return array;
  }

bubbleSort([2, 1, 3, 5, 4]);

export default bubbleSort

// loop through array

  // grab the value based on index position


  // compare current and next


  // if current > next then switch index place with next


    // continue up as long as number is greater
    // if smaller make current the larger number and continue through array check


  // loop through again with same as above


  // start from beginning and loop again


  // if no changes end loop


  // return sorted array
