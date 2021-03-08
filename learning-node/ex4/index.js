const joker = require('one-liner-joke');
let randomJoke = joker.getRandomJoke({'exclude_tags': ['racist', 'dirty', 'sex']});
console.log(randomJoke.body);
console.log(randomJoke.tags)