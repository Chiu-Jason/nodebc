const numbers = [];
for (count = 1000; count > 0; count--){
    numbers.push(count)};
const evenNumbers = numbers.filter((number, index)=> number%2 === 0);
const oddNumbers = numbers.filter((number, index)=> number%2 > 0);
const first20Even = evenNumbers.filter((number,index)=> index < 20);
const last10Odd = oddNumbers.filter((number,index)=> index > oddNumbers.length - 11 );
console.log(first20Even);
console.log(last10Odd);  
   