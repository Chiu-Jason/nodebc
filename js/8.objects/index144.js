const user = {
    userName: "batman",
    password: "Alfred1960ROCKS!"
};
console.log(user.userName, user.password);
console.log(user.userName.charAt(0).toUpperCase() + user.userName.slice(1));
console.log(user.password.replace("1960", " "));
console.log(user.userName.replace(user.userName.charAt(0),user.userName.charAt(0).toUpperCase()));
