// Get pokemons from regions with switch cases from nav bar elements.
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

// Get pokemons from Pokeapi, fetchPokemons calls getPokemon.
//And stores the data in 'const pokemon'.
const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const pokemon = await response.json();
    return pokemon;
};

module.exports.fetchPokemons = fetchPokemons;