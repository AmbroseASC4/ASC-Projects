var xspeed = 0;
var yspeed = 0;
function setup(){
    createCanvas(1300, 800);
    background('black');
     xspeed = random(1, 10); 
     yspeed = random(1, 10);
}

var x = 30;
var y = 30;


function draw(){
    background('black');
    fill(255);
    rect(1200, mouseY, 5, 50);
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(x, y, 50, 50);
   
   
    x = x + xspeed; 
    if( x > 1300 || x < 0){
        textSize(40);
        text('Game Over!', 650, 400, 500, 100);
    }

    if( x > ){
        xspeed = -xspeed;
    }

    y = y + yspeed;

    if(y > 800 || y < 0){
        yspeed = -yspeed;
    }


}