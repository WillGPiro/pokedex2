import request from 'superagent';

export const getCharacter = (pokeId) => request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${pokeId}`)

