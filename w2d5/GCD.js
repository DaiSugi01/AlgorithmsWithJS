// find the greatest common divisor of the two numbers given

/*
If A = 0 then GCD(A,B)=B, since the GCD(0,B)=B, and we can stop.  
If B = 0 then GCD(A,B)=A, since the GCD(A,0)=A, and we can stop.  
Write A in quotient remainder form (A = B⋅Q + R)
Find GCD(B,R) using the Euclidean Algorithm since GCD(A,B) = GCD(B,R)
*/

const gcd = function(a, b) {

  if (a === 0) { return b; }
  if (b === 0) { return a; }

  let remainder = 0;

  while (b !== 0) {
    remainder = a % b
    a = b;
    b = remainder;
  }

  return a
}

/* TEST */
// Expected answer  ->  6
console.log(gcd(36, 78));

// Expected answer  ->  5
console.log(gcd(10, 5));

// Expected answer  ->  4
console.log(gcd(0, 4));

// Expected answer  ->  100
console.log(gcd(100, 0));