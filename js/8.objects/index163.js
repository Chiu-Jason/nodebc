function add(){
    let total = 0;
    for (let i=0; i < arguments.length; i++){
        total += arguments[i]
    }
    console.log(total)
    return total
};
add(10,15,20,30);

function sumx(){
    total = [...arguments].reduce((acc, curr) => acc + curr);
    console.log(total)
    return total;
};
sumx(10,20,30,40)

