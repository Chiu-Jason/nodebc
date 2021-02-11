function getHexaColor(color){
    let value = ''
    if (color === "white"){
        value = "#FFFFFF";
    }
    if (color === "black"){
        value = "#000000";
    }
    if (color === "blue"){
        value = "#0b24fb";
    }
    if (color === "green"){
        value = "#0e7e12";
    }
    if (color === "yellow"){
        value = "#fffd38";
    }
    if (color === "pink"){
        value = "#fec1cc"
    }
    console.log(value);
    return value;
}
getHexaColor("green");
