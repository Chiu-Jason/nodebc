let low;
let mid;
let high;
function sort(number1, number2, number3, highToLow){
    if (number1 > number2 && number1 > number3){
        high = number1;
        if (number2 > number3){
            mid = number2;
            low = number3}
        else {low = number2; mid = number3}
    }
    else if (number1 < number2 && number1 < number3){
        low = number1;
        if (number2 > number3){
            high = number2;
            mid = number3;}
        else {mid = number2; high = number3};
    }
    else {mid = number1;
        if (number2 > number3){
            high = number2;
            low = number3;}
        else { high = number3; low = number2;}
        }
    if (highToLow){
        console.log(`${high}, ${mid}, ${low}`)}
    else {
    console.log(`${low}, ${mid}, ${high}`)}

}
sort(10,8,25,true);