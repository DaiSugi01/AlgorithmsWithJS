// find the lowest common multiple of two given numbers

const lcm = function(a, b) {
  
  const biggerNum = Math.max(a, b);
  const smallerNum = Math.min(a, b);

  let i = 1;
  while (true) {
    const multNum = biggerNum * i;
    if (multNum % smallerNum === 0) { return multNum; }
    i++;
  }
}

/* TEST */
// Expected answer  ->  12
console.log(lcm(3, 4));

// Expected answer  ->  36
console.log(lcm(36, 12));

// Expected answer  ->  36
console.log(lcm(18, 12));