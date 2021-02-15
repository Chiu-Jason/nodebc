const tripExpenses = [100, 200, 150];
const budget = tripExpenses.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(`hotel: ${tripExpenses[0]}, trip: ${tripExpenses[1]}, meal: ${tripExpenses[2]}`)
console.log(`Total trip budget: ${budget}`);
