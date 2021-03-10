const makeCase = (input, style) => {
  
  const newStr = input.split(' ');
  let result = "";

  let snakeCase = "";
  if (Array.isArray(style)) {
    snakeCase = convertToSnakeCase(newStr, "_");
    result = snakeCase.toUpperCase();
  }

  if (style === "camel") {
    result = convertToPascallCase(newStr, "");
    result = result.charAt(0).toLowerCase() + result.slice(1);
  }

  const vowels = new Set(["a", "e", "i", "o", "u"]);
  if (style === "vowel") {
    result = input.split("").map(letter => {
      if (vowels.has(letter)) {
        return letter.toUpperCase();
      } else {
        return letter;
      }
    }).join("");
  }

  if (style === "consonant") {
    result = input.split("").map(letter => {
      if (vowels.has(letter)) {
        return letter;
      } else {
        return letter.toUpperCase();
      }
    }).join("");
  }

  if (style === "pascal") { result = convertToPascallCase(newStr, "") }
  if (style === "title") { result = convertToPascallCase(newStr, " ") }
  if (style === "snake") { result = convertToSnakeCase(newStr, "_") }
  if (style === "kebab") { result = convertToSnakeCase(newStr, "-") }

  return result;
};

const convertToSnakeCase = (words, mark) => {
  return words.join(mark);
}

const convertToPascallCase = (words, mark) => {
  let output = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(mark);

  return output;
}


// Should be thisIsAString
console.log("Camel: ", makeCase("this is a string", "camel"));

// Should be ThisIsAString
console.log("Pascal: ", makeCase("this is a string", "pascal"));

// Should be this_is_a_string
console.log("Snake: ", makeCase("this is a string", "snake"));

// Should be this-is-a-string
console.log("Kebab: ", makeCase("this is a string", "kebab"));

// Should be This Is A String
console.log("Title: ", makeCase("this is a string", "title"));

// Should be thIs Is A strIng
console.log("Vowel: ", makeCase("this is a string", "vowel"));

// Should be THiS iS a STRiNG
console.log("Consonant: ", makeCase("this is a string", "consonant"));

// Should be THIS_IS_A_STRING
console.log("Upper snake: ", makeCase("this is a string", ["upper", "snake"]));