let number = 9;
let multiply = 1;
let outcome = number * multiply;
do {
    console.log(`${number} x ${multiply} = ${outcome}`);
    multiply++
    outcome = number * multiply;
} while (multiply < 11)