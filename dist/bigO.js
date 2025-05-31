"use strict";
function add(x, y) {
    return x + y;
}
function sumNumbersInArray(arr) {
    let val = 0;
    for (const num of arr) {
        val += num;
    }
    return val;
}
function findElementIndex(target) {
    const array = [1, 2, 3, 4, 5];
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            return mid;
        }
        else if (array[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
}
console.log(findElementIndex(5));
