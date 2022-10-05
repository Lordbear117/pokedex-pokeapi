# pokedex-pokeapi

* Script de generacion del bundle
npm install -g browserify
browserify ./src/main.js -o ./src/bundle.js 

* Borrar la carpeta node_modules mas rapido y eficiente
npm install -g browserify
rimraf node_modules

*Instalar watchify(dependencia que regenera el bundle cuando detecta cambios y sirve como demonio en desarrollo)
npm install -g watchify
npm install watchify
watchify ./src/main.js -o ./src/bundle.js
