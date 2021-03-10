// Function 1: Return the remainder. Function will take two parameters. 
// It will divide the first number by the second, and return the remainder. 
const getRemainder = (x, y) => {
  return x % y;
}

/* TEST */
// Should be 2
console.log(getRemainder(10, 4));

// Should be 1
console.log(getRemainder(22, 3));

// Should be 4
console.log(getRemainder(29, 5));