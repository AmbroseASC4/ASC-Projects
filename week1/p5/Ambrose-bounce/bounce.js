function setup(){
    createCanvas(windowWidth, windowHeight);
    background('black');
}

var x = 0;
var y = 0;

function draw(){
    background('black');
    fill(255);
    ellipse(x, y, 100, 100);
    x = x + 10;
    y = y + 9;
}