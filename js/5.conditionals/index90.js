let odd = 1;
for (let number = 1; number < 1001; number++){
    if (number%2 > 0){
        console.log(odd);
        odd += number;
    }
}