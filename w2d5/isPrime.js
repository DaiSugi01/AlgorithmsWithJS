// check if a given number is prime. return true or false. 

const isPrime = function(num) {

  if (num < 2) { return false; }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/* TEST */
// Expected answer  ->  true
console.log(isPrime(11))

// Expected answer  ->  true
console.log(isPrime(2))

// Expected answer  ->  false
console.log(isPrime(1))

// Expected answer  ->  false
console.log(isPrime(10))