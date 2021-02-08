let number = 0;
let even = number;
do {
    if (even == 0){
    console.log("Number: " + number);
    }
    number++;
    even = number %2;
} while (number < 101);