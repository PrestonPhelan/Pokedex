import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const initialState = {
  moves: [],
  items: []
};

const pokemonDetailReducer = (state = initialState, action) => {
  // debugger
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonDetailReducer;
