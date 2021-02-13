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
let group1 = [];
mutants.forEach(function(mutantName){
        if ((mutantName === "Iceman") || 
            (mutantName === "Logan") ||
            (mutantName === "Phoenix")){
            group1.push(mutantName); 
        }
            });
    console.log(mutants);
    console.log(`Team 1 is ${group1.join(', ')}`);