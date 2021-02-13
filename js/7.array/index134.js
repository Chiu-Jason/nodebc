const numbers = []
let total = 0
for (count = 1; count <=1000; count++){
    numbers.push(count);
    total = total + count;
    console.log(total);
}
if (total === 500500){
    console.log("Good job!!!")
}
else {
    console.log("Take a look to see if something is wrong");
}
