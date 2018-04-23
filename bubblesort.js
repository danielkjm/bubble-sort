function swap(arr, firstIdx, secondIdx) {
  const temp = arr[secondIdx]; // 3
  arr[secondIdx] = arr[firstIdx]; // 4
  arr[firstIdx] = temp; // 3
}

function bubbleSort(arr) {
  // let swapCounter = 0;
  // debugger;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > arr[i + 1]) {
  //     swap(arr, i, i + 1); // swap([4,3,1,2,5], 0, 1);
  //     swapCounter++;
  //   }
  // }

  // if (!swapCounter) {
  //   return arr;
  // }
  // bubbleSort(arr);
  // return arr;

// outer for loop is responsible for looping depends on length of an array.
// inner for loop is responsible for comparing two numbers.

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }

  return arr;
}
