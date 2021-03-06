// write a insertion sort algorithm based on the video shown in class.
// should take in an array, and sort it into ascending order using 
// insertion sorting logic

let arr1 = [4, 78, 54, 34, 2, 8, 45, 77, 99, 23, 567, 6, 7];

let arr2 = [56, 98, 65, 3, 4, 58, 68, 90, 12, 34, 45];


const insertionSort = function(arr) {

  for (let i = 1; i < arr.length; i++) {
    
    let targetNum = arr[i];
    let insertIdx = i;

    for (let j = i-1; j >= 0; j--) {
      if(arr[j] > targetNum) {
        arr[j+1] = arr[j];
        insertIdx = j;
      }
    }

    arr[insertIdx] = targetNum;
  }

  return arr
};

console.log(insertionSort(arr1));

console.log(insertionSort(arr2));