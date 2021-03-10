// Write a function that returns the minimum number of swaps to convert the first binary string into the second.
const minSwaps = (bynary, target) => {

  if (!checkZeroCount(bynary, target)) {
    return "The two bynary doesn't have the same amount of 1s and 0s"
  }

  let swapCount = 0
  let left = 0
  let right = bynary.length - 1

  while (left <= right) {
    bynary[left] !== target[right] ? swapCount += 1 : "";
    left += 1
    right -= 1
  }
  return swapCount
}

const checkZeroCount = (arr1, arr2) => {
  let arrOneZeros = arr1.split("").filter(bit => bit === "0")
  let arrTwoZeros = arr2.split("").filter(bit => bit === "0")

  if (arrOneZeros.length === arrTwoZeros.length) {
    return true
  } else {
    return false
  }
}

// Answer should be 1
console.log(minSwaps("1100", "1001"))

// Answer should be 4
console.log(minSwaps("10011001", "01100110"))

// Answer should be 1
console.log(minSwaps("110011", "010111"))

// this should be error
console.log(minSwaps("1010", "1110"))
