const arithmetic = {};
arithmetic.add = ((firstNumber, secondNumber) => {
    if (typeof firstNumber != "number" || typeof secondNumber != "number") {
        console.log("Error: please input numbers only")
    }
    else {console.log(firstNumber + secondNumber)}
});
arithmetic.subtract = ((firstNumber, secondNumber) => {
    if (typeof firstNumber != "number" || typeof secondNumber != "number") {
        console.log("Error: please input numbers only")
    }
    else { console.log( firstNumber - secondNumber)} 
});
arithmetic.multiply = ((firstNumber, secondNumber) => {
    if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
        console.log("Error: please input numbers only")
    }
    else { console.log( firstNumber * secondNumber)}
});
arithmetic.divide = ((firstNumber, secondNumber) => {
    if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
        console.log("Error: please input numbers only")
    }
    else { console.log( firstNumber / secondNumber)}
});
arithmetic.remainder = ((firstNumber, secondNumber) => {
    if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
        console.log("Error: please input numbers only")
    }
    else { console.log( firstNumber % secondNumber)}
});
arithmetic.add(2,10);
arithmetic.subtract(10,5);
arithmetic.multiply(3,100);
arithmetic.divide(40,2);
arithmetic.remainder(20,2);
arithmetic.add("John","Rambo");