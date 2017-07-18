function setup(){
    createCanvas(1300, 800);
    background('black');
}

var x = 30;
var y = 30;
var xspeed = 9; 
var yspeed = 10;
var j = random(20, 500);

function draw(){
    background('black');
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(x, y, random(20, 500), random(20, 500));
   
    x = x + xspeed; 
    if( x > 1300 || x < 0){
        xspeed = -xspeed;
    }

    y = y + yspeed;

    if(y > 800 || y < 0){
        yspeed = -yspeed;
    }
}