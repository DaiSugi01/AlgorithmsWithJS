// Function 3: convert hours into seconds. 
// Take in a value of hours up to 4 decimal places, and convert it into seconds. 
const convertHoursToSec = (hours) => {
  return parseInt(hours * 60 * 60);
}

/* TEST */

// Should be 3600
console.log(convertHoursToSec(1));

// Should be ≒ 3564
console.log(convertHoursToSec(0.99));

// Should be ≒ 3596
console.log(convertHoursToSec(0.999));