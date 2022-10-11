// Card creator
const Card = (pokemon) => {
    const view = `
<div class="pokemon" style="background-color: ${pokemon.color}">
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
                <img class=" primary-icon" src=${pokemon.icon1[0]}  />
            </div>
            ${pokemon.secondaryType[0] == "" ? `<div><br></div>` : `
            <div>
            ${pokemon.secondaryType[0]}
                <img class="secondary-icon" src=${pokemon.icon2[0]}  />
            </div>
            `}
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
