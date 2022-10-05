(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var a = function a() {
    console.log('Hello world!')
};

module.exports.a = a;
},{}],2:[function(require,module,exports){
const Card = () => {
    const view = `
       <h1>CARD</h1>`
    return view;
}

module.exports.Card = Card;
},{}],3:[function(require,module,exports){
const API = require("./api");
const CARD = require('./card');

API.a();
const app = document.getElementById('app');

app.innerHTML = CARD.Card();
},{"./api":1,"./card":2}]},{},[3]);
