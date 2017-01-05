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
      <div className='pokemonDetailView'>
        <img className='large-img' src={pokemon.image_url} /> <br />

        <h3>{pokemon.name}</h3>
        <h4>Type: {pokemon.poke_type}</h4>

        <h4>Attack: {pokemon.attack}</h4>

        <h4>Defense: {pokemon.defense}</h4>


        <h4>Moves: {movesArray}</h4>


        <h4>Items: {itemsArray.join(', ')}</h4>

      </div>
    );
  }
}

export default PokemonDetail;
