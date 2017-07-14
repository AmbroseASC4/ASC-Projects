 
var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
var mashArray = ['Brinstar', 'Fountain of Dreams', 'Green Greens', 'Ice Mountain'];
var firstQuestion = [2];
var secondQuestion = ['Link', 'Kirby'];
var user = [];

function question(){
    var strikes = prompt('How many times will you strike?');
    var character = prompt('Who will you choose to fight?');
    firstQuestion.push(strikes);
    user.push(character);
}

console.log(question());
console.log('you used ' + user + ' to fight ' + secondQuestion + ' in the ' + mashArray + ' and hit them ' + firstQuestion + ' times. Too bad. Mewtwo wins!');