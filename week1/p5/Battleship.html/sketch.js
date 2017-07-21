var grid = [ [0, 1, 2, 3, 4, 5], 
             [0, 1, 2, 3, 4, 5], 
             [0, 1, 2, 3, 4, 5], 
             [0, 1, 2, 3, 4, 5], 
             [0, 1, 2, 3, 4, 5],
             [0, 1, 2, 3, 4, 5] ];

function setup(){
    createCanvas(755, 755);
    background("#2170ef");
}



 

function draw(){
    rectMode(CORNER);
    for(var x = 0; x < 6; x++){
        for(var y = 0; y < 6; y++){
            stroke("BLUE");
            strokeWeight(10);
            rect(x * 125, y * 125, 125, 125)
        }
    }
}

function mouseClicked(){
    rect
    fill(220);
}