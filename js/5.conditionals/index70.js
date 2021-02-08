let number = 1;
let odd = 1;
while (number < 1001){
    
    number++;
    if (number%2 > 0){
        console.log(odd);
        odd += number;
    }
}