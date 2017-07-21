function pokemon(name, hp, attack){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
}

var pikachu = new pokemon('Pikachu', 300, 20);
var ratata = new pokemon('Ratata', 300, 10);
var onix = new pokemon('Onix', 300, 15);
var bulbasaur = new pokemon('Bulbasaur', 300, 18);
var charizard = new pokemon('Charizard', 300, 30);
var meowth = new pokemon('Meowth', 300, 10);
var sparrow = new pokemon('Sparrow', 300, 10);

var userPokemon = [pikachu, onix, bulbasaur, charizard];
var oppPokemon = [ratata, meowth, sparrow];

function setup() {
    createCanvas(750, 750);
    fill('red');
    rect(0, 650, 750, 100);
    //attack rectangle
    fill(255);
    rect(50, 670, 100, 50, 10);
    fill(0);
    textSize(20);
    text('Attack', 65, 700);
    //user hp bar
    fill(0);
    textSize(20);
    text('hp: ', 220, 558);
    //opponent hp bar
    fill(0);
    textSize(20);
    text('hp: ', 220, 108);
    //opponent pokemon
    fill('#0004ff');
    ellipse(650, 100, 100, 100);
    //user pokemon
    fill('#00ff48');
    ellipse(100, 550, 100, 100);
}



var i = Math.floor(Math.random() * 4);
var j = Math.floor(Math.random() * 3);

function draw(){
    var n = userPokemon[i].name;
    //user pokemon
    fill(0);
    textSize(20);
    text(n, 350, 530);
    //opponent pokemon hp
    text(oppPokemon[j].name, 350, 80);
    //first bar of hp
    fill(250);
    rect(250, 100, 300, 7);
    //second bar that displays the hp going down
    fill('green');
    rect(250, 100, oppPokemon[j].hp, 7);
    //first bar of user hp
    fill(250);
    rect(250, 550, 300, 7);
    //second bar
    fill('green');
    rect(250, 550, userPokemon[i].hp, 7);   
}

function mouseClicked(){
    if (mouseY >= 670 && mouseY <= 720 && mouseX >= 50 && mouseX <= 150){
        oppPokemon[j].hp = oppPokemon[j].hp - userPokemon[i].attack;

        userPokemon[i].hp = userPokemon[i].hp - oppPokemon[j].attack;
    }
    if (oppPokemon[j].hp <= 0){
        oppPokemon[j].hp = 0;
        fill(random(0, 255), random(0, 255), random(0, 255));
        textSize(50);
        text(userPokemon[i].name + " WON!!", 175, 375);
    }
}
