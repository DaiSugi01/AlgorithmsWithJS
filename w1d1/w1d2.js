const camelCase = function(input) {

  let newStr = input.split(' ').map(input => {
      return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    }).join("");

    return newStr.charAt(0).toLowerCase() + newStr.slice(1);
};


console.log(camelCase("this is a string"));
console.log(camelCase("holy heck"));
console.log(camelCase("supercalifragalisticexpialidocious"));