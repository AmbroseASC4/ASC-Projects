function setup(){
    createCanvas(1000, 800);
    background('black');
    
}

 var x = 0;
    s = 'a';
    vlaue = 0;
function draw(){

   background('black');
        fill(255);
        //Title of the game
        textSize(20);
        textAlign(LEFT);
        text('Type the Letter:', 50, 150, 500, 800);
        //sentence to be typed
        textSize(20);
        textAlign(LEFT);
        text(s, x, 300, 300, 800);
        x = x+1;
        //score keeper
        textSize(16);
        textAlign(LEFT);
        text('score: ' + value, 50, 500, 300, 800);
}

function keyTyped(){
    if (key === s){
        value = value + 10;
    }else if(key != s)
}