// Function 6: even or odd?  will take in one parameter ( a number ) and print either even or odd, 
// depending on the number. 
const getEvenOrOdd = (num) => {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// Should be Even
console.log(getEvenOrOdd(10));

// Should be Odd
console.log(getEvenOrOdd(11));