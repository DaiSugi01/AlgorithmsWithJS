const repeatNumbers = function(data) {
  
  let result = ""

  let hasTwoMoreArr = false
  data.length>1 ? hasTwoMoreArr = true : ""

  for(let i = 0; i < data.length; i++) {

    i === data.length - 1 ? hasTwoMoreArr = false : hasTwoMoreArr = true
    for(let j = 0; j< data[i][1]; j++) {
      result += data[i][0]
    }
    hasTwoMoreArr ? result += "\n" : ""
  }

  return result
};


/* TEST*/

// Should print out 1111111111
console.log(repeatNumbers([[1, 10]]));

// Should print out 11222
console.log(repeatNumbers([[1, 2], [2, 3]]));