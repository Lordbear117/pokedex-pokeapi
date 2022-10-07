const fetchRegion = (region) => {
    let url = `https://pokeapi.co/api/v2/pokedex/${region}`
    return url
}
module.exports.fecthRegion = fetchRegion;