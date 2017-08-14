var choices = ["rock", "paper", "scissors"];

var database = firebase.database().ref();

function rock(){

    var computerChoice = choices[Math.floor(Math.random()*3)];

    if(computerChoice == "rock"){
        $("#result").text("It's a Tie!");
    }else if(computerChoice == "paper"){
        $("#result").text("You Lost!");
    }else if(computerChoice == "scissors"){
        $("#result").text("You Won!");
    }
}
function paper(){

    var computerChoice = choices[Math.floor(Math.random()*3)];

    if(computerChoice == "rock"){
        $("#result").text("You Won!");
    }else if(computerChoice == "paper"){
        $("#result").text("It's a Tie!");
    }else if(computerChoice == "scissors"){
        $("#result").text("You Lost!");
    }
}
function scissors(){

    var computerChoice = choices[Math.floor(Math.random()*3)];

    if(computerChoice == "rock"){
        $("#result").text("You Lost!");
    }else if(computerChoice == "paper"){
        $("#result").text("You Won!");
    }else if(computerChoice == "scissors"){
        $("#result").text("It's a Tie!");
    }
}