// Write a function that takes in an array, and sorts the first
// half of the array in ascending order, and the second half 
// of the array in descending order

// you may use methods for this. 

let arr1 = [4, 78, 54, 34, 2, 8, 45, 77, 99, 23, 567, 6, 7]

let arr2 = [56, 98, 65, 3, 4, 58, 68, 90, 12, 34, 45]

const halfSorted = function(arr) {

  mid = Math.floor(arr.length / 2);

  for (let i = 0; i < mid-1; i++) {
    for (let j = 0; j < mid-1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j);
      }
    }
  }

  for (let i = mid; i < arr.length; i++) {
    for (let j = mid; j < arr.length; j++) {
      if (arr[j] < arr[j+1]) {
        swap(arr, j);
      }
    }
  }

  return arr;
}

const swap = (arr, idx) => {
  let t = arr[idx];
  arr[idx] = arr[idx+1];
  arr[idx+1] = t;
}


console.log(halfSorted(arr1));

//results --> [2, 4, 8, 34, 54, 78, 567, 99, 77, 45, 23, 7, 6]

console.log(halfSorted(arr2));

//results --> [3, 4, 56, 58, 65, 98, 90, 68, 45, 34, 12]