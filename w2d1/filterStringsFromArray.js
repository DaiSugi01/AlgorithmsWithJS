// Create a function that takes an array of non-negative 
// integers and strings and return a new array without the strings.

const filterArray = function(arr) {
  const newArr = arr.filter(ele => typeof(ele) === "number");
  return newArr
}

console.log(filterArray([1, 2, "a", "b"]));
// ➞ [1, 2]

console.log(filterArray([1, "a", "b", 0, 15]));
// ➞ [1, 0, 15]

console.log(filterArray([1, 2, "aasf", "1", "123", 123]));
//➞ [1, 2, 123]