var prompt = require('prompt-sync')();
//
// get input from the user.
//
var current_money = 1000;
var user_items = [];

//sword costs $500
//food costs $100

while(current_money >= 100){
    console.log('you currently have' + current_money + '. Sword = $500, Food $100');
    var choice = prompt('Do you want a sword, or do you want food?');
    if(choice == 'sword'){
        if(current_money >= 500){
            current_money = current_money - 500;
            user_items.push('sword');
        }
    }else if(choice == 'food'){
        current_money = current_money - 100;
        user_items.push('food');
    }else{
        console.log('We dont have that in stock.');
    }
}

console.log('Watch out for the frost troll! Best of luck on your adventure!');
var seeInventory = prompt('Do you want to see your inventory? (y/n)');

if(seeInventory == 'y'){
    console.log('your inventory is: ' + user_items);
}else{
    console.log('have a good day!')
}if(seeInventory == 'n'){
    console.log('K bye')
}