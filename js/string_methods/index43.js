let text = "game of thrones";
let firstChar = text.charAt(0);
let secondChar = text.charAt(5);
let thirdChar = text.charAt(8);
let resultName = firstChar.concat(secondChar,thirdChar);
resultName = resultName.toUpperCase();
console.log(`the final result is: ${resultName}`);
