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
];
const selectMutants = mutants.map(function(mutantName){
    if ((mutantName === "Professor X") ||
        (mutantName === "Logan") ||
        (mutantName === "Phoenix") ||
        (mutantName === "Gambit")){
            return "<3 " + mutantName;
        }
    else { return mutantName;}
})
console.log(mutants);
console.log(selectMutants);