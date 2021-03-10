const greet = (name, lastName, callback)=>{
    console.log(`Hi ${name} ${lastName}`);
    callback()
};
module.exports = greet;