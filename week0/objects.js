var charizard = {
    'attack' : 'blaze',
    'hp' : 266 , 
    'legendary' : false,
    'types' : ['fire, flying']
};

function Superhero(realname, power, sidekick, race, 
                   gender, hideout, nemesis, universe){
    this.realname = realname;
    this.power = power;
    this.sidekick = sidekick;
    this.race = race;
    this.gender = gender;
    this.hideout = hideout;
    this.nemesis = nemesis;
    this.universe = universe;

    this.talk = function(){
        console.log('Hi my name is ' + this.realname);
    }
}

var superman = new Superhero('Clark Kent', 'Heat vision', false, 
                             'Kryptonian', 'Male', 'Metropolis', 
                             'Lex Luther', 'DC');


function Pizza(sauce, cheese, toppings, size){
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;
    this.size = size;
}

var pizza = new Pizza('tomato', 'mozzarella', ['pinapple', 'ham', 'bacon'], 'XXL');