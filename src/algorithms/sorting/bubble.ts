function bubblSort(arr: number[]): number[] {
  // start from the begining element
  for (let i = 0; i < arr.length - 1; i++) {
    // store a swapped variable to false so we can detect a sorted array in the first iteration
    let swapped = false
    // ensure that the inner loop always get's smaller so we don't check for already sorted elements at the end
    for (let j = 0; j < arr.length - i - 1; j++) {
      // if the next element is greater than the previous element
      if (arr[j] > arr[j + 1]) {
        // you need to swap them 
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        swapped = true
      }
    }

    // in case there was no swap, it means the array is sorted so no need to iterate again
    if (!swapped) break;
  }

  // return sorted array
  return arr;
}

console.log(bubblSort([5, 4, 10, 1, 6, 2]))