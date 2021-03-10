/*
Write a function that takes in an array of strings, and converts them all 
into snake case 
(ex. (['Dogs are cute', 'Cats aRe also cute']) ---> ['dogs_are_cute', 'cats_are_also_cute']) notice the 
lowercase letters, and underscores connecting the words. 
return the entire array with the converted strings
*/
const snakeCaseArr = function (arr) {

    // return the errpr message if the given array is empty.
    if (arr.length === 0) return 'This is an empty array!';
    
    // access to each element of array to make each word snake case.
    for (let i = 0; i < arr.length; i++) {
        // make word lower case.
        const lowerStr = arr[i].toLowerCase();
        // split given string into each word.
        const splitStr = lowerStr.split(' ');
        // assign new string to original array.
        arr[i] = splitStr.join('_')
    }


    // return the re-writed array.
    return arr;
}

// console.log((snakeCaseArr(['Coding Is Fun']) === ['coding_is_fun']) ? "Test 1: Passing" : "Test 1: Failing");

// console.log((snakeCaseArr(['Coding Is Fun', 'Dogs ARE cool']) === ['coding_is_fun', 'dogs_are_cool']) ? "Test 2: Passing" : "Test 2: Failing");

// console.log((snakeCaseArr(['cats are CUTE', 'Dogs ARE cool']) === ['cats_are_cute', 'dogs_are_cool']) ? "Test 3: Passing" : "Test 3: Failing");

console.log('------------TEST------------');
console.log(`My answer1 : ${snakeCaseArr(['Coding Is Fun'])}`);
console.log(`Expected1  : coding_is_fun`);
console.log(`My answer2 : ${snakeCaseArr(['Coding Is Fun', 'Dogs ARE cool'])}`);
console.log(`Expected2  : coding_is_fun,dogs_are_cool`);
console.log(`My answer3 : ${snakeCaseArr(['cats are CUTE', 'Dogs ARE cool'])}`);
console.log(`Expected3  : cats_are_cute,dogs_are_cool`);
