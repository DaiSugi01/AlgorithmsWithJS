const arrayOfMultiples = (num, len) => {
  let ansArr = []
  for (let i = 1; i <= len; i++) {
    ansArr.push(num * i)
  }
  return ansArr
}


// answer should be [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(12, 10))

// answer should be [17, 34, 51, 68, 85, 102]
console.log(arrayOfMultiples(17, 6))