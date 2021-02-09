function getUserId() {
    return 50;
}
function isUserValid() {
    return (getUserId() >= 30) ? true : false
}
if (isUserValid()){
    console.log("User Valid");
}
else {console.log("User not valid")};
