const API = require("./api");
const CARD = require('./card');
const COLOR = require('./colors');
const TYPE = require('./pokemon-types');
const POKEMONCLASS = require('./pokemon-class');

//Elements
const mainContainer = document.getElementById("mainContainer");
const regionTitle = document.getElementById("region_title")

const navItemsList = [
    kantoPage = document.getElementById("kanto_page"),
    johtoPage = document.getElementById("johto_page"),
    hoennPage = document.getElementById("hoenn_page"),
    sinnohPage = document.getElementById("sinnoh_page"),
    unovaPage = document.getElementById("unova_page"),
    kalosPage = document.getElementById("kalos_page"),
    alolaPage = document.getElementById("alola_page"),
    galarPage = document.getElementById("galar_page")
]
//events
navItemsList.forEach(async (e) => {
    e.addEventListener('click', async () => {
        regionTitle.textContent = `${e.children[0].children[0].textContent}`;
        await fillScreen(e.id);
    })
})

//functions
const fillScreen = async (id) => {
    mainContainer.innerHTML = "";
    let pokemonList = await API.fetchPokemons(id);
    console.log(pokemonList)
    pokemonList.forEach(item => {
        createPokemonCard(item);
    })
}


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
    let pokemonData = new POKEMONCLASS.pokemonData(id, name, primaryType, secondaryType, color, icon1, icon2, height, weight, ability);
    let card = document.createElement('div');
    card.innerHTML = CARD.Card(pokemonData);
    mainContainer.append(card);
}

//onInit
fillScreen('kanto_page');