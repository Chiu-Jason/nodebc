let total = 0;
let even
for (let count = 0; count <= 1000; count++){
    even = count%2
    if (even == 0){
        total += count;
        console.log(total);
        if (count >= 40){
            break;
        }
    }
}