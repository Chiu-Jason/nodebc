function getShapePerimeter(base,height){
    let perimeter;
    if (base === height){
        perimeter = base * 4;
    }
    else {
        perimeter = 2 * (base + height);
    }
    console.log(`${perimeter} is the shape perimeter`);
    if (perimeter > 100){
        console.log("The perimeter is too big");
    }
    else { 
        console.log("The perimeter is fine");
    } 
    return perimeter
}
getShapePerimeter(10,10);