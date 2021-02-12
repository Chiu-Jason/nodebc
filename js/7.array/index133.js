const mutants = [
    "Professor X",
    "Cyclops",
    "Iceman",
    "Angel",
    "Magneto",
    "Beast",
    "Phoenix",
    "Logan",
    "Gambit",
]
for (let count = 0; count < mutants.length; count++){
    if (mutants[count] !== "Magneto"){
        console.log(mutants[count])
    }
    else {
        break;
    }
}
if (mutants.indexOf("Magneto") > -1){
const magneto = mutants.indexOf("Magneto");
mutants.splice(magneto,1);
}
const mutantsUpperCase = mutants.map(function(mutantName){
    return mutantName.toUpperCase();
})
for (let count = 0; count < mutants.length; count++){
console.log(count,mutantsUpperCase[count])}


