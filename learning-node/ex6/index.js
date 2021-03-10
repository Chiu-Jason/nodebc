const message = () => {
    console.log('This code gets executed after the greet function call')
};
const greet = (name, lastName, callback)=>{
    console.log(`Hi ${name} ${lastName}`);
    callback()
};
greet('Rocky', 'Balboa', message)