function setup(){
    createCanvas(1000,1000);
    background(255);
}


function mouseDragged(){
    
    color1 = random(0, 255);
    color2 = random(0, 255);
    color3 = random(0, 255);
    fill(color1, color2, color3);

    var j = random(0, 100);
    var x = random(0,100);

    var shapes = [rect(mouseX, mouseY, x, j), 
                  ellipse(mouseX, mouseY, j, x)];
        shapes[Math.floor(Math.random() * shapes.length)];

}
    function mouseMoved(){
        fill(200);
        ellipse(mouseX, mouseY, 20, 20);
    }