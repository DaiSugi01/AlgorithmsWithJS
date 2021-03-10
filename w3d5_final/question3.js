/*
Write a function that takes in a string and converts it into kebab case
(ex. ('Dogs are cute') ---> Dogs-Are-Cute) notice how every word 
becomes capitalized, and connected by a hyphen.
if the string passed in is an empty string, return 'This is an empty string!'

for this question, make a comment for every piece of the code, explaining
what it does and why.
*/

const kebabCase = function (str) {

    if (!str) return 'This is an empty string!';
    
    // split given string into each word.
    const splitStr = str.split(' ');

    // make beginning word upper case and rest of them lower case.
    const newStr = splitStr.map(word => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })

    // join the words of array by "-" and return it.
    return newStr.join('-');

}

console.log((kebabCase('Coding Is Fun') === 'Coding-Is-Fun') ? "Test 1: Passing" : "Test 1: Failing");

console.log((kebabCase('this STrIng has Weird casing') === 'This-String-Has-Weird-Casing') ? "Test 2: Passing" : "Test 2: Failing");

console.log((kebabCase('') === 'This is an empty string!') ? "Test 3: Passing" : "Test 3: Failing");

