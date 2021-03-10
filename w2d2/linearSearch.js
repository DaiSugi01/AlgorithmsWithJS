// Write an algorithm that performs linear search on a given array.

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 19, 24,29, 27, 26];

function linearSearch(testArray, target) {
  for (var i = 0; i < testArray.length; i++) {
      if (testArray[i] == target) {
          return `match ${i}`;
      }
  }
  return null;
}

console.log(linearSearch(testArray, 2))
console.log(linearSearch(testArray, 5))
console.log(linearSearch(testArray, 17))