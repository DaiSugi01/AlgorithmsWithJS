// write a function that loops through an array of strings and numbers. 
// for every string, it should add an s to the end of the word 
// (for example, if the given word was apple, it would become apples)
// for every number, it should add 20 to the number. 
// return the changed array. 

const addSAnd20 = function (arr) {
    
    // access each element of array to check if it is string or not.
    for (let i =0; i < arr.length; i++) {
        if (typeof(arr[i]) === 'string') {
            // add 's' at the end of word if the type of element is string.
            arr[i] += 's';
        } else if (typeof(arr[i]) === 'number') {
            // add 's' at the end of word if the type of element is string.
            arr[i] += 20;
        }
    }
    // return a change array.
    return arr;
}

// console.log((addSAnd20([56, 'dog', 'apple', 'cheese', 45, 71]) === [76, 'dogs', 'apples', 'cheeses', 65, 91]) ? "Test 1: Passing" : "Test 1: Failing");

// console.log((addSAnd20([56, 45, 71, 90, 28, 67]) === [76, 65, 91, 110, 48, 87]) ? "Test 2: Passing" : "Test 2: Failing");

// console.log((addSAnd20(['dog', 'apple', 'cheese']) === ['dogs', 'apples', 'cheeses']) ? "Test 3: Passing" : "Test 3: Failing");

console.log('------------TEST------------');
console.log(`My answer1 : ${addSAnd20([56, 'dog', 'apple', 'cheese', 45, 71])}`);
console.log(`Expected1  : 76,dogs,apples,cheeses,65,91`);
console.log(`My answer2 : ${addSAnd20([56, 45, 71, 90, 28, 67])}`);
console.log(`Expected2  : 76,65,91,110,48,87`);
console.log(`My answer3 : ${addSAnd20(['dog', 'apple', 'cheese'])}`);
console.log(`Expected3  : dogs,apples,cheeses`);
