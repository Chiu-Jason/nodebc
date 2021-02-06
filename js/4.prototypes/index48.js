let message = "3.14 it's a great number but 42 it's the answer to life.";
let pi = parseFloat(message.slice(0,4));
let answerToLife = parseInt(message.substr(message.indexOf(42),2));

let result = pi + answerToLife;
console.log("result: " + result);
console.log(result.toString() + " is the result of adding pi and answerToLife")
