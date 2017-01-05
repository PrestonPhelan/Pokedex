import React, { Component } from 'react';

import ItemDetailContainer from '../items/item_detail_container';

import { Link } from 'react-router';

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
    const itemsPicArray = pokemon.items.map( item => (
      <Link to={`pokemon/${this.props.params.pokemonId}/item/${item.id}` } key={item.id}>
        <img src={item.image_url} className='item-img' />
      </Link>
    ));

    return (
      <div className='pokemonDetailView'>
        <img className='large-img' src={pokemon.image_url} /> <br />

        <h3>{pokemon.name}</h3>
        <h4>Type: {pokemon.poke_type}</h4>

        <h4>Attack: {pokemon.attack}</h4>

        <h4>Defense: {pokemon.defense}</h4>


        <h4>Moves: {movesArray}</h4>


        <h4>Items</h4>
        {itemsPicArray}
        {this.props.children}

      </div>
    );
  }
}

export default PokemonDetail;
