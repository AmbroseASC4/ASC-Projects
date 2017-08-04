function setup(){
    createCanvas(800, 800);
    background('black');
}

var x = 350;
var y = 740;
var w = 5;
var h = 10;
var Projectile = [];
var screen = 0;

function draw(){
    //ship 
    strokeWeight(0);
    background('black');
    fill('#00ff50');
    rect(x + 30, 740, 15, 15);//top rect
    rect(x, 750, 75, 30);
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)){
        x = x - 10;
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
        x = x + 10;
    }
    
    //user information on top
    fill('black');
    stroke('red');
    strokeWeight(1);
    rect(50, 0, 700, 50);
    fill(255);
    textSize(20);
    text('Score: ', 60, 20);
    text('Lives: ', 600, 20);
    
    //boundaries
    if (x < 0){
        x = 0;
    }
    if (x > 725){
        x = 725;
    }

    for(i = 0; i < Projectile.length; i++){
        fill('red');
        rect(Projectile[i].x, Projectile[i].y, w, h);
        Projectile[i].y = Projectile[i].y-5;
    }

    noStroke();

    fill(220);
    rect(alien1.xC, alien1.yC + 10, alien1.wid, alien1.hei);
    rect(alien1.xC + 300, alien1.yC + 10, alien1.wid, alien1.hei);
    rect(alien1.xC + 600, alien1.yC + 10, alien1.wid, alien1.hei);
    rect(alien1.xC + 150, alien1.yC + 10, alien1.wid, alien1.hei);
    rect(alien1.xC + 450, alien1.yC + 10, alien1.wid, alien1.hei);
    rect(alien1.xC, alien1.yC + 100, alien1.wid, alien1.hei);
    rect(alien1.xC + 150, alien1.yC + 100, alien1.wid, alien1.hei);
    rect(alien1.xC + 300, alien1.yC + 100, alien1.wid, alien1.hei);
    rect(alien1.xC + 450, alien1.yC + 100, alien1.wid, alien1.hei);
    rect(alien1.xC + 600, alien1.yC + 100, alien1.wid, alien1.hei);
    //instructions
    fill('red');
    textSize(15);
    text('Right Arrow & "D" key:',50, 795);
    text('Left Arrow & "A" key:', 310, 795);
    text('Spacebar:', 550, 795);
    fill('white');
    text('Moves Right', 205, 795);
    text('Moves Left', 455, 795);
    text('Shoot', 625, 795)

    if (screen == 0){
        background('black');
        fill('white');
        strokeWeight(10);
        stroke('blue');
        textSize(100);
        text('Space Invaders!', 50, 400);
        strokeWeight(5);
        textSize(50);
        text('Click anywhere to begin', 150, 500);
    }


}   

//aliens objects
function alien(xC, yC, wid, hei){
    this.xC = xC;
    this.yC = yC;
    this.wid = wid;
    this.hei = hei;
}

var alien1 = new alien(50, 50, 100, 50);
//bullet objects
function projectile1(x,y,w,h){
    this.x = x + 35;
    this.y = y;
    this.w = w;
    this.h = h;
}


function keyPressed(){
  if (keyCode === 32 ) {
    Projectile.push(new projectile1(x,y-5,w,h));
    }
}

function mouseClicked(){
    screen = 1;
}
