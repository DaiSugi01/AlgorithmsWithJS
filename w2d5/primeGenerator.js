// generate a list of prime numbers from 2 up to a value, n
// you can use the Sieve of Eratosthenes method to do this. 

const primeGenerator = function (n) {

  if (n < 2) { return `Pass a number greater than 1.` }

  let nums = new Array(n-1);
  for (let i = 2; i <= n; i++) { nums[i-2] = i; }

  const primeNums = [];
  let targetNum = nums[0];

  while (targetNum < n / 2) {

    //Get rid of the number divided by the prime number from primeNum array.
    targetNum = nums[0];
    nums = nums.filter(tempNum => tempNum % targetNum !== 0);
    primeNums.push(targetNum);

  }

  primeNums.push(...nums)

  return [...primeNums];
}

/* TEST */
// Expected answer  ->  2, 3, 5, 7, 11
console.log(primeGenerator(11));

// Expected answer  ->  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
console.log(primeGenerator(100));

// Expected answer  ->  [2]
console.log(primeGenerator(2));

// Expected answer  ->  Pass a higher number than 1.
console.log(primeGenerator(1));