const isEven = function(number){
    if (number%2 == 0){
        return number + ' is '  + 'even';
    }
    else {
        return number +  ' is ' + 'odd';
    } 
}
module.exports = isEven;