import { connect } from 'react-redux';

import { createNewPokemon } from '../../actions/pokemon_actions';

import PokemonForm from './pokemon_form';

const mapDispatchToProps = dispatch => ({
  createPokemon: (pokemon) => dispatch(createNewPokemon(pokemon))
});

export default connect(null, mapDispatchToProps)(PokemonForm);
