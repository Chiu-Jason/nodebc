function showNumbers(start,end){
    start = parseInt(start);
    end = parseInt(end);
    if (start > end){
        while (start >= end){
            console.log(start)
            start--
        }
    }
    else if (start < end){
        while (start <= end){
            console.log(start)
            start++
        }
    }
    else {console.log(start);
        console.log(end);    
    }
}
showNumbers(10,0);