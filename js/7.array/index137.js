const numbers = [];
for (count = 1; count <= 1000; count++){
    numbers.push(count)};
const numberIncrement = numbers.map(function(numberToIncrement){      
    return numberToIncrement + 10});
numbers.forEach(function(number, index){
    console.log(`index: ${index + 1},   original number: ${number},   increment value: ${numberIncrement[index]}`)
})

