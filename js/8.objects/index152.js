const user = {
    userName: null,
    password: null
}
user.greet = function (userName) {
    if (this.userName !== null) {
        console.log(`Hello, I'm user ${this.userName}`)
    }
    else {
        console.log("Please assign a userName value");
    }
}
user.greet();
user.updateUserName = function(newUserName){
    this.userName = newUserName;
}
user.updatePassword = function(newPassword){
    this.password = newPassword;
}
user.updateUserName("RockyBalboa");
user.updatePassword("Boxinggreat")
console.log(user);
user.greet();