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