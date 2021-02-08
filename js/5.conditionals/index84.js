let star = "*************";
let count = 0;
let odd = 1;
do {
    if (odd > 0){
    console.log(star.slice(0,count));
    }
    count++
    odd = count%2
} while (count < 14)