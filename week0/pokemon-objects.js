var charizard = {
    'name' : 'Charizard',
    'atk' : 212,
    'def' : 182,
    'hp' : 156,
    'legend' : false,
    'type' : ['fire', 'flying']
};

var blastoise = {
    'name' : 'Blastoise',
    'atk' : 186,
    'def' : 222,
    'hp' : 158,
    'legend' : false,
    'type' : 'water'
};

var venusaur = {
    'name' : 'Venusaur',
    'atk' : 198,
    'def' : 200,
    'hp' : 160,
    'legend' : false,
    'type' : ['grass', 'poison']
};

var articuno = {
    'name' : 'Articuno',
    'atk' : 198,
    'def' : 242,
    'hp' : 180,
    'legend' : true,
    'type' : ['ice', 'flying']
};

var zapdos = {
    'name' : 'Zapdos',
    'atk' : 232,
    'def' : 194,
    'hp' : 180,
    'legend' : true,
    'type' : ['electric', 'flying']
};

var moltres = {
    'name' : 'Moltres',
    'atk' : 242,
    'def' : 194,
    'hp' : 180,
    'legend' : true,
    'type' : ['fire', 'flying']
};

var pokemon = [charizard, blastoise, venusaur, 
               articuno, zapdos, moltres];

function printRoster(){
    for(var i = 0; i < pokemon.length; i++){
        console.log(pokemon[i]);
    }
}

printRoster();