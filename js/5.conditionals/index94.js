let star = "*************";
let odd = 1;
for (let count = 0; count < 14; count++){
    odd = count%2
    if (odd > 0){
        console.log(star.slice(0,count));
        }
        
}