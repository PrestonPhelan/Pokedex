import React, { Component } from 'react';

class PokemonIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul>
        {this.props.pokemon
          .map((pok) => {
            return (
              <li key={pok.id}>
                <img className='small-img' src={pok.image_url}/><br/>
                {pok.name}
              </li>
            );
          })
        }
      </ul>
    );
  }
}
export default PokemonIndex;
