import React, { Component } from 'react';

import { withRouter } from 'react-router';

const TYPES = [
  "fire",
  "electric",
  "normal",
  "ghost",
  "psychic",
  "water",
  "bug",
  "dragon",
  "grass",
  "fighting",
  "ice",
  "flying",
  "poison",
  "ground",
  "rock",
  "steel"
].sort();

class PokemonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      poke_type: "",
      attack: "0",
      defense: "0",
      moves: ["", ""]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateMoves = this.updateMoves.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const submitObj = { pokemon: this.state };
    this.props.createPokemon(submitObj)
      .then( (newPokemon) => {
        this.props.router.push(`pokemon/${newPokemon.id}`);
      }
    );
  }

  update(property) {
    return (e) => {
      this.setState({[property]: e.target.value});
    };
  }

  updateMoves(idx) {
    return (e) => {
      const oldMoves = this.state.moves;
      let newMoves = oldMoves.slice();
      newMoves[idx] = e.target.value;
      this.setState({moves: newMoves});
    };
  }

  render() {
    const typeSelectOptions = TYPES.map(
      type => (
        <option value={type}>{type.toUpperCase()}</option>
      )
    );

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name
          <input type="text"
            value={this.state.name}
            onChange={this.update('name')}
          />
        </label>
        <label>Image Url
          <input type="text"
            value={this.state.image_url}
            onChange={this.update('image_url')}
          />
        </label>

        <label>Type
          <select value={this.state.poke_type}
                  onChange={this.update('poke_type')}
          >
            <option selected disabled>Select Type</option>
            {typeSelectOptions}
          </select>
        </label>

        <label>Attack
          <input type="text"
            value={this.state.attack}
            onChange={this.update('attack')}
          />
        </label>
        <label>Defense
          <input type="text"
            value={this.state.defense}
            onChange={this.update('defense')}
          />
        </label>
        <label>Move 1
          <input type="text"
            value={this.state.moves[0]}
            onChange={this.updateMoves(0)}
          />
        </label>
        <label>Move 2
          <input type="text"
            value={this.state.moves[1]}
            onChange={this.updateMoves(1)}
          />
        </label>

        <button>Create Pokemon</button>
      </form>
    );
  }
}

export default withRouter(PokemonForm);
