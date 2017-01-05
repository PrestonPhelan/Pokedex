import React from 'react';
import { Link } from 'react-router';

// const PokemonIndexItem = ({pokemon}) => (
//   <li>
//     <img className='small-img' src={pokemon.image_url}/><br/>
//     {pokemon.name}
//   </li>
// );
//
// export default PokemonIndexItem;

export default ({pokemon}) => (
  <li>
    <Link to="pokemon/:pokemonID">
      <img className='small-img' src={pokemon.image_url}/><br/>
      {pokemon.name}
    </Link>
  </li>
);
