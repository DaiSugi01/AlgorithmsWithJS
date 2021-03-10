// Write me a function that converts any number up to 255 into binary.

const convertToBynary = (decNum) => {
  let bynary = ""
  let remainder = decNum

  while(remainder > 1) {
    
    remainder % 2 === 0 ? bynary += "0" : bynary += "1"
    remainder = Math.floor(remainder / 2)
  }

  remainder === 0 ? bynary += "0" : bynary += "1"

  return bynary.split("").reverse().join("")
}

// Answer should be 1010
console.log(convertToBynary(10))

// Answer should be 1001
console.log(convertToBynary(9))

// Answer should be 1101
console.log(convertToBynary(13))

// Answer should be 11111111
console.log(convertToBynary(255))