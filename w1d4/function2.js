// Function 2: convert minutes into seconds. 
// Function will take one parameter that will be  a number of minutes, up to 2 decimal places. 
// Convert it into seconds, and return that number. 
const convertMinToSec = (min) => {
  return min * 60;
}

/* TEST */

// Should be 189
console.log(convertMinToSec(3.15));

// Should be 150
console.log(convertMinToSec(2.5));

// Should be 120
console.log(convertMinToSec(2));