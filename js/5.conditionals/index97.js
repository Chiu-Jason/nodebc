let tenth;
for (let count = 100; count >=0; count--){
    tenth = count%10;
    if (tenth == 0){
        console.log(`** ${count} **`)
    }
    else {console.log(count);}
}