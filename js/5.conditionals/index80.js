let number = 1;
let odd = 1;
do {
    number++;
    if (number%2 > 0){
        console.log(odd);
        odd += number;
    }
}  while (number < 1001);