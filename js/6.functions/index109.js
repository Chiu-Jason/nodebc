function validateUser(userName, password){
    if ((userName === "nacho" && password === "Nerd1979") ||
    (userName === "pedro" && password === "Batman0217") ||
    (userName === "marta" && password === "Mother2312")){
        console.log(`Welcome ${userName}, nice to see you again`);
        return true;
        } 
        else {console.log("Please input valid credentials")
        return false;
    }
}
validateUser("nacho","Nerd1979");