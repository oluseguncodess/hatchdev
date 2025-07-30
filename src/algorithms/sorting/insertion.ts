function insertionSort(arr: number[]): number[] {
  // start from the unsorted array
  for (let i = 1; i < arr.length; i++) {
    // store the first element of the unsorted array in a temp variable
    let temp = arr[i]
    // store the first element in the sorted array 
    let j = i - 1

    // as long as the element in the sorted array is greated than the element in the unsorted, shift it to the right
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j--
    }
    // store the element in the unsorted array in it's correct position --> if the element in the sorted array isn't greater than element in unsorted array, that unsorted element retains it's position
    arr[j + 1] = temp
  }

  // return sorted array
  return arr;
}

console.log(insertionSort([5, 4, 10, 1, 6, 2]))