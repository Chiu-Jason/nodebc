let firstPerson = ["Rocky", "Balboa", "Vancouver, B.C", 40];
let secondPerson = ["John", "Rambo", "Richmond, B.C", 50];
let thirdPerson = ["John", "Rambo", "Richmond, B.C", 50];

firstPerson = firstPerson.reduce((accumulator, currentValue)=> accumulator + currentValue);
secondPerson = secondPerson.reduce((accumulator, currentValue)=> accumulator + currentValue);
thirdPerson = thirdPerson.reduce((accumulator, currentValue)=> accumulator + currentValue);
console.log(firstPerson);
console.log(secondPerson);
console.log("")
if (firstPerson === secondPerson){
    console.log("They are a match");
}
if (secondPerson === thirdPerson){
    console.log(`${secondPerson} and ${thirdPerson} is a match`)
}
let list = [firstPerson, secondPerson, thirdPerson];
console.log(list);
let finalList = list.reduce((accumulator, currentValue)=>{
    if (accumulator.indexOf(currentValue) === -1){
        accumulator.push(currentValue)
    }
    return accumulator
},[]);
console.log(finalList);