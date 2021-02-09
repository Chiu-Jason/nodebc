let f = 0;
let f1 = -1;
let f2 = 1;
for (let n = 17; n >= 0; n--){
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
}