let total = 0;
for (count = 0; count <= 1000; count++){
    total += count;
    if (total <= 400){
        console.log(total)
    }
    else {
        break;
    }
}