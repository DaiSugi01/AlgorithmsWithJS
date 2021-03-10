// Function 4: convert celsius into fahrenheit into celsius, and vice versa. 
// Function will take two parameters that will be  a temp either fahrenheit or 
// celsius, up to 2 decimal places. The second argument will be either 
// the letter ‘c’ or the letter ‘f’ to state whether the value given is starting in celsius or in fahrenheit. 
// Convert the temp to the opposite unit, and return the value.  (35.6, ‘c’)

const convertCF = (temp, cf) => {

  if (cf === "c") {
    return ((temp * 1.8) + 32).toFixed(2) + "°F";
  } else if (cf === "f") {
    return ((temp - 32) * 5 / 9).toFixed(2) + "°C";
  } else {
    return "Unexpected input."
  }
}

/* TEST */

// Should be -273.15
console.log(convertCF(-459.67, "f"));

// Should be 100
console.log(convertCF(37.78, "c"));