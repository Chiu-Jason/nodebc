let star = "*************";
let count = 0;
let odd = 1;
while (count < 14){
    if (odd > 0){
    console.log(star.slice(0,count));
    }
    count++
    odd = count%2
}