let average = 6;
let studentAverage = 4;
let points = studentAverage - average;
console.log("This student has a greater or equal average required to pass: ", studentAverage >= average);
if (points < 0)
{console.log(`This student is missing ${points * -1} to pass`)}
else
{console.log("This student passed")};