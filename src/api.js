const COLOR = require('./colors');
const TYPE = require('./pokemon-types');
const POKEMONCLASS = require('./pokemon-class');

// Pokemons from first region

/*switch (pokemonRegion) {
    case Kanto:
        firstPokemon = 1;
        lastPokemon = 151;
        break;
    case Johto:
        firstPokemon = 152;
        lastPokemon = 251;
        break;
    case Hoenn:
        firstPokemon = 252;
        lastPokemon = 386;
        break;
    case Sinnoh:
        firstPokemon = 387;
        lastPokemon = 493;
        break;
    case Unova:
        firstPokemon = 494;
        lastPokemon = 649;
        break;
    case Kalos:
        firstPokemon = 650;
        lastPokemon = 721;
        break;
    case Alola:
        firstPokemon = 722;
        lastPokemon = 809;
        break;
    case Galar:
        firstPokemon = 810;
        lastPokemon = 898;
        break;
    default:
        break;
}*/


const fetchPokemons = async (pokemonRegion) => {
    let firstPokemon;
    let lastPokemon;
    switch (pokemonRegion) {
        case 'kanto_page':
            firstPokemon = 1;
            lastPokemon = 151;
            break;
        case 'johto_page':
            firstPokemon = 152;
            lastPokemon = 251;
            break;
        case 'hoenn_page':
            firstPokemon = 252;
            lastPokemon = 386;
            break;
        case 'sinnoh_page':
            firstPokemon = 387;
            lastPokemon = 493;
            break;
        case 'unova_page':
            firstPokemon = 494;
            lastPokemon = 649;
            break;
        case 'kalos_page':
            firstPokemon = 650;
            lastPokemon = 721;
            break;
        case 'alola_page':
            firstPokemon = 722;
            lastPokemon = 809;
            break;
        case 'galar_page':
            firstPokemon = 810;
            lastPokemon = 898;
            break;
        default:
            break;
    }
    let pokemonsList = [];
    for (let i = firstPokemon; i <= lastPokemon; i++) {
        pokemonsList.push(await getPokemon(i));
    }
    return pokemonsList;
};

// Get 151 pokemons from Pokeapi, fetchPokemons calls getPokemon 151 times.
//And stores the data in 'const pokemon'.
const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const pokemon = await response.json();
    //createPokemonCard(pokemon);
    //console.log(pokemon)
    return pokemon;
};

/*// Function to create cards with pokemons data
function createPokemonCard(pokemon) {

    //CONST

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    // Padstart for 3 numbers position with '0' at the start.
    const id = pokemon.id.toString().padStart(3, '0')

    // Get an array with pokemon types (Normal, Fire, water, etc.). Can be up to 2 types. First letter toUpperCase.
    const pokemon_types = pokemon.types.map(type => type.type.name[0].toUpperCase() + type.type.name.slice(1));

    const primaryType = pokemon_types[0];

    const secondaryType = new Array(pokemon_types[1]).filter(item => item != undefined);

    // Set the color using the name of the type and the colors array with types names.
    const color = COLOR.colors[primaryType];

    // Set the icons paths for the pokemon types
    const icon1 = new Array(TYPE.TypeIcons[primaryType]);
    const icon2 = new Array(TYPE.TypeIcons[secondaryType]).filter(item => item != undefined);

    const height = pokemon.height / 10;

    const weight = pokemon.weight / 10;

    const ability = pokemon.abilities.map(ability => ability.ability.name[0].toUpperCase() + ability.ability.name.slice(1)).join(", ");

    // Function to send dato to the card.
    let POKEMONCLASS = new pokemonData(id, name, primaryType, secondaryType, color, icon1, icon2, height, weight, ability);

}*/

//fetchPokemons();

module.exports.fetchPokemons = fetchPokemons;