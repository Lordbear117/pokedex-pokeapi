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

