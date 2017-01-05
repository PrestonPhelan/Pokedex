import React, { Component } from 'react';

class PokemonDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.pokemonId !== newProps.params.pokemonId) {
     this.props.requestSinglePokemon(newProps.params.pokemonId);
    }
  }

  render() {
    const pokemon = this.props.pokemonDetail;
    const movesArray = pokemon.moves.join(', ');
    const itemsArray = pokemon.items.map( item => (
      item.name
    ));

    return (
      <div>
        <img className='large-img' src={pokemon.image_url} /> <br />

        <h3>{pokemon.name}</h3>
        <h5>Type: {pokemon.poke_type}</h5>

        <h5>Attack: {pokemon.attack}</h5>

        <h5>Defense: {pokemon.defense}</h5>


        <h5>Moves: {movesArray}</h5>


        <h5>Items: {itemsArray.join(', ')}</h5>

      </div>
    );
  }
}

export default PokemonDetail;
