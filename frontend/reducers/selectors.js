import values from 'lodash/values';

export const selectAllPokemon = (state) => values(state.pokemon);

export const selectPokemonItem = (state, itemId) => {
  let currentItem;
  state.pokemonDetail.items.forEach( item => {
    if (item.id === itemId) {
      currentItem = item;
    }
  });
  return currentItem;
};
