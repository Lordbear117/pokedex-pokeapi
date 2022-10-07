(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const fetchRegion = (region) => {
    let url = `https://pokeapi.co/api/v2/pokedex/${region}`
    return url
}
module.exports.fecthRegion = fetchRegion;
},{}],2:[function(require,module,exports){
const COLORS = require('./colors')

const Card = (props) => {
    const view = `
       <h1 style="background: ${COLORS.colors.Dark}">CARD3</h1>`
    return view;
}

module.exports.Card = Card;
},{"./colors":3}],3:[function(require,module,exports){
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

navItemsList.forEach(e => {
    e.addEventListener('click', () => {
        regionTitle.textContent = `${e.children[0].children[0].textContent}`
        console.log(e.children[0].children[0].textContent)
    })
})


},{"./api":1,"./card":2}]},{},[4]);
