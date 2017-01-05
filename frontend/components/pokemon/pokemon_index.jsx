import React, { Component } from 'react';

import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <div>
        {this.props.children}
        <ul>
          {this.props.pokemon
            .map((pok) => {
              return (
                <PokemonIndexItem key={pok.id} pokemon={pok} />
              );
            })
          }
        </ul>
      </div>
    );
  }
}
export default PokemonIndex;
