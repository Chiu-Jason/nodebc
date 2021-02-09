function even100() {
    let count;
    let even = 0;
    for (let count = 0; count <= 100; count++){
    even = count%2;
    if (even == 0){
        console.log(count);
        }
    }
}
even100();