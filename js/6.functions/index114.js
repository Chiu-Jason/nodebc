function revert(word){ 
    let reverse = '';
    for (let wordLength = word.length; wordLength >= 0; wordLength--){
        reverse = reverse + word.charAt(wordLength);       
    }
    console.log(reverse);
}
revert("desserts");