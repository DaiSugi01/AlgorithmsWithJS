/*
1. The function takes in four parameter...
      sorted numbers array, target number we want to find, left index and right index.
        --at first, default of left index is 0, and that of right index is length of array -1.
2. If the right index less than left index, RETURN the fail message.
3. Specify middle index of array. -- by Math.floor((left + right) / 2)
4. If... and GO BACK TO first step
      the target number less than middle number, assign the middle index - 1 to the right index.
      the target number greater than middle number, assign middle index + 1 to the left index.
5. Else if the middle number equals to target number, RETURN the middle index.
*/

const binarySearchRec = (nums, targetNum, left=0, right=nums.length-1) => {
  
  if (right < left) {
    // if the right index less than left index, RETURN the fail message.
    return -1;
  }

  // specify middle index of array. -- by Math.floor((left + right) / 2)
  let mid = Math.floor((left + right) / 2);

  if (targetNum < nums[mid]) {
    // the target number less than middle number, assign middle index - 1 to the right index.
    // and GO BACK TO first step.
    mid = binarySearchRec(nums, targetNum, left, mid-1);
  } else if (targetNum > nums[mid]) {
    // the target number greater than middle number, assign middle index + 1 to the left index.
    // and GO BACK TO first step.
    mid = binarySearchRec(nums, targetNum, mid+1, right);
  }

  if (nums[mid] === targetNum) {
    // the the middle number equals to target number, RETURN the middle index
    return mid;
  } else {
    // the right index less than left index, return the fail message.
    return `There is ${targetNum} in this array.`;
  }
}


let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 19, 24, 26, 27, 29];
// Expected answer -> 0
console.log(binarySearchRec(testArray, 1));

// Expected answer -> 3
console.log(binarySearchRec(testArray, 4));

// Expected answer -> 8
console.log(binarySearchRec(testArray, 9));

// Expected answer -> 15
console.log(binarySearchRec(testArray, 27));

// Expected answer -> 16
console.log(binarySearchRec(testArray, 29));

// Expected answer -> Error message.
console.log(binarySearchRec(testArray, 10));
