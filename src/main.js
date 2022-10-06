const API = require("./api");
const CARD = require('./card');

//Elements
const mainContainer = document.getElementById("mainContainer");

const kantoPage = document.getElementById("kanto-page");
// const kantoPage = document.getElementById("kanto-page");
// const kantoPage = document.getElementById("kanto-page");
// const kantoPage = document.getElementById("kanto-page");
// const kantoPage = document.getElementById("kanto-page");
// const kantoPage = document.getElementById("kanto-page");
// const kantoPage = document.getElementById("kanto-page");
// const kantoPage = document.getElementById("kanto-page");


//events
kantoPage.addEventListener('click', () => {
    console.log("Kanto Event")
})


mainContainer.innerHTML = (CARD.Card());
