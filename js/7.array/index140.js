let mutants = [
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
mutants = mutants.filter((mutant)=> mutant !== "Magneto" 
&& mutant !== "Iceman" && mutant !== "Gambit");
console.log(mutants);