function setup(){
    createCanvas(800, 800);
    background('black');
}

var x = 350;
var y = 740;
var width = 5;
var height = 10;
var projectile = [];

function draw(){
    //ship 
    strokeWeight(0);
    background('black');
    fill('#00ff50');
    rect(x + 30, 740, 15, 15);//top rect
    rect(x, 750, 75, 30);
    if (keyIsDown(LEFT_ARROW)){
        x = x - 10;
    }
    if (keyIsDown(RIGHT_ARROW)){
        x = x + 10;
    }
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

}

function projectile1(x,y,width,height){
    this.x = x + 32.5;
    this.y = y;
    this.width= w;
    this.height= h;
}


function keyPressed(){
  if (keyCode === 32 ) {
      console.log("it works!");
    Projectile.push(new projectile1(x,y-5,w,h));
    
 }


function keyPressed(){
    background('black')
    rect(x,x-30,15,20);//projectile
    if(keyCode === LEFT_ARROW){
        x=x-20;
    }
    if(keyCode === RIGHT_ARROW){
        x=x+20;

   }

}

}