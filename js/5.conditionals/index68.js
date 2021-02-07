let number = 0;
let even = number;
while (number < 101){
    if (even == 0){
    console.log("Number: " + number);
    }
    number++
    even = number %2
}