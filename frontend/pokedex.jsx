import React from 'react';
import ReactDOM from 'react-dom';

import * as APIUtil from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';

import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
