var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function randletter(){
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(randletter());

var pokemon = ['charizard', 'pikachu', 'articuno', 'eevee', 'squirtle', 'piplup'];

function randword(){
    return pokemon[Math.floor(Math.random() * pokemon.length)];
}
console.log(randword());

var firstPokemon = ['charizard', 50, 100];
var secondPokemon = ['squirtle', 20, 100];

function pokeAttack(firstPokemon, secondPokemon){
    return(secondPokemon - firstPokemon);
}
console.log(pokeAttack(firstPokemon[1] , secondPokemon[2]));