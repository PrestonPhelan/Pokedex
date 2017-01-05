import { connect } from 'react-redux';

import ItemDetail from './item_detail';

import { selectPokemonItem } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  // console.log(selectPokemonItem(state, ownProps.params.itemId));
  // debugger;
  return {
    item: selectPokemonItem(state, parseInt(ownProps.params.itemId))
  };
};

export default connect(mapStateToProps)(ItemDetail);
