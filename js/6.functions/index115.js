function getLongerText(firstWord, secondWord){
    if (firstWord.length > secondWord.length){
        console.log(firstWord);
        return firstWord;
    }
    else if (firstWord.length > secondWord.length){
        console.log(secondWord);
        return secondWord;
    }
    else {console.log(`${firstWord} and ${secondWord} is the same length`)}
}
getLongerText("sasuke", "naruto");