let playerName = "Patrik Laine is lame";
let teams = "New Jersey Devils, New York, Rangers, Winnipeg jets & Pittsburgh Penguins";
let message = "Vancouver is the best Canadian city, Go Vancouver";
let template = `${playerName.slice(0,15)} ${teams.slice(47,51)} ${message.slice(13,21)}${message.slice(35,39)}`;
console.log(template);
let teams2 = `${teams.slice(47,48).toUpperCase()}${teams.slice(48,51)}`;
let message2 = `${playerName.slice(0,15)} ${message.slice(13,21)} ${teams2} player${message.slice(35,39)} ${teams2}!!`;
console.log(message2);