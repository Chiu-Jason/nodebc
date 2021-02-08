let f = 0;
let f1 = -1;
let f2 = 1;
n = 17;
while (n >= 0){
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
    n--
}