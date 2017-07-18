console.log('Hello, world');

function setup(){
    createCanvas(500, 500);
    //background(R(0-255), G())
    background(225);
    //making the background
    fill('yellow');
    ellipse(width / 2, height / 2, 400);
    //every shape below this line is black
    fill('black');
    //BEastly
    //thicker lines
    strokeWeight(10);
    //sunglasses
    line(80, 150, 420, 150);
    //mouth
    line(150, 350, width - 150, 350);
    //Sunglasses lence
    rect(150, 150, 80, 40);
    rect(width - (150+80), 150, 80, 40);
}

function mousePressed(){
    console.log("The mouse is at this x : " + mouseX);
    console.log("The mouse is at this y : " + mouseY);
}