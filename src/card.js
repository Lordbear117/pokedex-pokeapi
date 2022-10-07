const COLORS = require('./colors')

const Card = (props) => {
    const view = `
       <h1 style="background: ${COLORS.colors.Dark}">CARD3</h1>
    `
    return view;
}

module.exports.Card = Card;