// Given what is supposed to be typed and what is actually typed, 
// write a function that returns the broken key(s).

const findBrokenKeys = (str, brokenStr) => {
  if (str === brokenStr) {
    return "These two texts are the same."
  }

  let cache = new Set();
  str.split("").forEach((char, index) => {
    if (brokenStr[index] !== char) { cache.add(char) }
  });

  return [...cache];

}

//  ➞ ["p"]
console.log(findBrokenKeys("happy birthday", "hawwy birthday"));

// ➞ ["y", "n"]
console.log(findBrokenKeys("starry night", "starrq light"));

//  ➞ ["b", "e", "v", "n"]
console.log(findBrokenKeys("beethoven", "affthoif5"));

//  ➞ These are the same text
console.log(findBrokenKeys("happy birthday", "happy birthday"));
