// Write an algorithm that performs binary search on a given array.
// the function will also track, and print out the number of steps required to reach the target
// the index of the item 

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 19, 24, 26, 27, 29];
let stringArray = ['aidan', 'bad', 'cow', 'dog', 'mouse', 'nacho', 'sound', 'trouble', 'youth', 'zoom'];

const binarySearch = function(arr, target) {

  let firstIndex = 0;
  let lastIndex = arr.length - 1;
  let mid = 0;
  let cnt  = 0

  while (firstIndex <= lastIndex) {
    mid = Math.floor(((firstIndex + lastIndex) / 2));
    cnt += 1;
    if (arr[mid] > target) {
      lastIndex = mid - 1;
    } else if (arr[mid] < target) {
      firstIndex = mid + 1;
    } else {
      return `Index : ${mid},  Count of steps : ${cnt}`;
    }
  }

  return `There is no ${target} in the array.  Count of steps : ${cnt}`
};


console.log(binarySearch(testArray, 2));
console.log(binarySearch(testArray, 20));
console.log(binarySearch(testArray, 19));
console.log(binarySearch(testArray, 12));
console.log(binarySearch(testArray, 26));
console.log(binarySearch(testArray, 870));

console.log("-------------------------------")
console.log(binarySearch(stringArray, 'cow'))
console.log(binarySearch(stringArray, 'dog'))
console.log(binarySearch(stringArray, 'trouble'))