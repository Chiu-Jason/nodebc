const fibonacci = function(){
    let f = 0;
    let f1 = -1;
    let f2 = 1;
    n = 10;
do {
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
    n--
} while (n >= 0)
}
fibonacci();
fibonacci();
fibonacci();