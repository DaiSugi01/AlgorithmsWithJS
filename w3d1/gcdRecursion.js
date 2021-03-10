// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers 
//using recursion. 

const gcdRecursive = function(a, b) {

  if (b === 0) return a;

  return gcdRecursive(b, a % b);
}


// Expected answer  ->  4
console.log(gcdRecursive(12, 28))

// Expected answer  ->  8
console.log(gcdRecursive(72, 32))

// Expected answer  ->  12
console.log(gcdRecursive(24, 12))
