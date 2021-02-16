let PsGames = [];
let xboxGames = [];
let budget = 0;
let gameNames = [];
let gamePrices = [];
const showDetail = function(){
    console.log(`
    name: ${this.name}
    price: ${this.price}
    console: ${this.console}`)};
let games = [{
    name: "Crash Bandicoot N. Sane Trilogy",
    price: 1060,
    sold: 20,
    console: "PS4",
    showDetail: showDetail
},
{
    name: "Lego Marvel Super Heroes",
    price: 700,
    sold: 25,
    console: "XBOX",
    showDetail: showDetail
},
{
    name: "Gta V",
    price: 1449,
    sold: 30,
    console: "PS4",
    showDetail: showDetail
    
},
{
    name: "Mortal Kombat Xl",
    price: 1190,
    sold: 34,
    console: "PS4",
    showDetail: showDetail
},
{
    name: "Gta V",
    price: 1250,
    sold: 60,
    console: "XBOX",
    showDetail: showDetail
},
{
    name: "Fifa 2017",
    price: 890,
    sold: 15,
    console: "PS4",
    showDetail: showDetail
},
{
    name: "Uncharted 4",
    price: 950,
    sold: 30,
    console: "PS4",
    showDetail: showDetail
},
{
    name: "Mortal Kombat Xl",
    price: 940,
    sold: 30,
    console: "XBOX",
    showDetail: showDetail
},
{
    name: "Need For Speed",
    price: 790,
    sold: 10,
    console: "PS4",
    showDetail: showDetail
},
{
    name: "Lego Batman",
    price: 1000,
    sold: 18,
    console: "PS4",
    showDetail: showDetail
},
{
    name: "Fifa 17",
    price: 1290,
    sold: 12,
    console: "PS4",
    showDetail: showDetail
},
{
    name: "Resident Evil 7",
    price: 1390,
    sold: 10,
    console: "PS4",
    showDetail: showDetail
},
{
    name: "Dragon Ball XX",
    price: 1390,
    sold: 25,
    console: "XBOX",
    showDetail: showDetail
}
];
PsGames = games.filter((game)=>  
        game.console === "PS4"
);
xboxGames = games.filter((game)=>  
        game.console === "XBOX"
);
//show all PS games
console.log("PS Games");
PsGames.forEach((game)=>game.showDetail());
//show all Xbox games
console.log("Xbox Games");
xboxGames.forEach((game)=>game.showDetail());
// show buget for all PS games
PsGames.forEach(function (game){
     budget += game.price;
});
console.log(`I need ${budget} to get all this PS4 great games!!`);
//show all games names
games.forEach(function(game){
    gameNames.push(game.name)
});
console.log(gameNames);
//show all games prices
games.forEach(function(game){
    gamePrices.push(game.price)
});
console.log(gamePrices);