let femaleStudents = ["Mary", "Jane", "Anna", "Maria", "Kelsey"];
let maleStudents = ["Zuma", "Chase", "Rubble", "Rocky", "Marshall"];
let students = maleStudents.concat(femaleStudents);
students.sort()
console.log(
    femaleStudents[0], 
    femaleStudents[1],
    femaleStudents[2],
    femaleStudents[3],
    femaleStudents[4]
    );
    let maleCount = maleStudents.length -1
    while (maleCount >= 0){
        console.log(maleStudents[maleCount]);
        maleCount--;
    }
for (let studentCount = students.length - students.length; studentCount < students.length; studentCount++){
    console.log(students[studentCount]);
}
