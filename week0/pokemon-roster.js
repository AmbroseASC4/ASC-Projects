var pokemons = [['charizard', 'fire', 78, 78, 84, false], 
                ['blastoise', 'water', 79, 100, 83, false],
                ['venusaur', 'grass, poison', 80, 83, 82, false],
                ['articuno', 'ice, flying', 90, 100, 85, true], 
                ['zapdos', 'electric, flying', 90, 85, 90, true], 
                ['moltres', 'fire, electric', 90, 90, 100, true]];

var pokeDesc = '';
for(var i = 0; i < pokemons.length; i++){
    for(var j = 0; j < pokemons[i].length; j++){
        pokeDesc = pokeDesc + pokemons[i][j] + ' ';
    }
    pokeDesc = pokeDesc + '\n';
}
console.log(pokeDesc);
