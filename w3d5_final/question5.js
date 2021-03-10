/*
write a function that loops through an array of numbers, and arrays, and adds all of the numbers
ex. [2, 3, 5, [1, 2], [3]] ---> 16
*/

const sumNestedArray = function (arr) {

  // return given parameter if arra is not an array.
  if (!Array.isArray(arr)) return arr;

  // access to each element of array to check if its type is array or not.
  // 
  let sum = 0;
  arr.forEach(num => {
    if (Array.isArray(num)) {
      // call it self if it is array to unwrap array, and add result to sum.
      sum += sumNestedArray(num);
    } else {
      // add num to sum if it is number.
      sum += num;
    }
  });

  // return sum of array.
  return sum;
}

console.log((sumNestedArray([1, [2, 3, 4], 6, 7, 5]) === 28) ? "Test 1: Passing" : "Test 1: Failing");

console.log((sumNestedArray([1, [2, 3, 4], [2], 7, [3, 5, 6]]) === 33) ? "Test 2: Passing" : "Test 2: Failing");