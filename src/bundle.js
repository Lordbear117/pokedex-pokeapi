(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./colors":3,"./pokemon-class":5,"./pokemon-types":6}],2:[function(require,module,exports){
const COLORS = require("./colors");
const POKEMONCLASS = require('./pokemon-class');

const Card = (pokemon) => {
    const view = `
<div class="pokemon">
    <div class="img-container">
        <img src="https://assets.pokemon.com//assets/cms2/img/pokedex/detail/${pokemon.id}.png" alt="${pokemon.name} front image" />
    </div>
    <div class="info">
        <span class="number"><i>#${pokemon.id}</i></span>
        <h3 class="name">${pokemon.name}</h3>
        <small class="type">
            <b>Tipo: </b>
            <div class="pokemon-types">
                ${pokemon.primaryType}
                <img class=" primary-icon" src=${pokemon.icon1[0]} alt="./../assets/pokeball.svg" />
            </div>
            <div>
            ${pokemon.secondaryType[0]}
                <img class="secondary-icon" src=${pokemon.icon2[0]} alt="./../assets/pokeball.svg" />
            </div>
        </small>
        <small>
            <span><B>Altura: ${pokemon.height} m</B></span>
            <br>
            <span><B>Peso: ${pokemon.weight} kg</B></span>
        </small>
        <br>
        <br>
        <small>
            <details>
                <summary><B>Movimientos</B></summary>
                <p>${pokemon.ability}</p>
            </details>
            <br>
            <details>
                <summary><B>Habilidades</B></summary>
                <p>${pokemon.ability}</p>
            </details>
        </small>
    </div>
</div>
`;
    return view;
};

module.exports.Card = Card;

},{"./colors":3,"./pokemon-class":5}],3:[function(require,module,exports){
//Pokemon colors related to their types

const colors = {
    Normal: '#d1d0a4',
    Fire: '#d66214',
    Water: '#6b96f1',
    Electric: '#eedf89e8',
    Grass: '#7AC74C',
    Ice: '#96D9D6',
    Fighting: '#C22E28',
    Poison: '#A33EA1',
    Ground: '#5c4e3afa',
    Flying: '#A98FF3',
    Psychic: '#F95587',
    Bug: '#798611de',
    Rock: '#57542aec',
    Ghost: '#735797',
    Dragon: '#6F35FC',
    Dark: '#67656def',
    Steel: '#B7B7CE',
    Fairy: '#D685AD'
};

module.exports.colors = colors;
},{}],4:[function(require,module,exports){
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
},{"./api":1,"./card":2,"./colors":3,"./pokemon-class":5,"./pokemon-types":6}],5:[function(require,module,exports){
// Class for pokemon data

class pokemonData {
    constructor(id, name, primaryType, secondaryType, color, icon1, icon2, height, weight, ability) {
        this.id = id;
        this.name = name;
        this.primaryType = primaryType;
        this.secondaryType = secondaryType;
        this.color = color;
        this.icon1 = icon1;
        this.icon2 = icon2;
        this.height = height;
        this.weight = weight;
        this.ability = ability;
    }
}

module.exports.pokemonData = pokemonData;
},{}],6:[function(require,module,exports){
//Pokemon types icons paths

const TypeIcons = {
	Normal: './../assets/pokemon-icons/NormalIcon.svg',
	Fire: './../assets/pokemon-icons/FireIcon.svg',
	Water: './../assets/pokemon-icons/WaterIcon.svg',
	Electric: './../assets/pokemon-icons/ElectricIcon.svg',
	Grass: './../assets/pokemon-icons/GrassIcon.svg',
	Ice: './../assets/pokemon-icons/IceIcon.svg',
	Fighting: './../assets/pokemon-icons/FightingIcon.svg',
	Poison: './../assets/pokemon-icons/PoisonIcon.svg',
	Ground: './../assets/pokemon-icons/GroundIcon.svg',
	Flying: './../assets/pokemon-icons/FlyingIcon.svg',
	Psychic: './../assets/pokemon-icons/PsychicIcon.svg',
	Bug: './../assets/pokemon-icons/BugIcon.svg',
	Rock: './../assets/pokemon-icons/RockIcon.svg',
	Ghost: './../assets/pokemon-icons/GhostIcon.svg',
	Dragon: './../assets/pokemon-icons/DragonIcon.svg',
	Dark: './../assets/pokemon-icons/DarkIcon.svg',
	Steel: './../assets/pokemon-icons/SteelIcon.svg',
	Fairy: './../assets/pokemon-icons/FairyIcon.svg'
};

module.exports.TypeIcons = TypeIcons;
},{}]},{},[4]);
