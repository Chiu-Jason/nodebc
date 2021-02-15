const user = {
    userName: "batman",
    password: "Alfred1960KPO!"
};
function shouldOpenBatCave(userName, password){
    if (userName === "batman" && password === "Alfred1960KPO!"){
        console.log("Welcome back Batman!!")
        return true;
    }
    else { 
        console.log("Sorry, you can't enter the Batcave, try again..")
        return false;}
}
shouldOpenBatCave(user.userName, user.password);