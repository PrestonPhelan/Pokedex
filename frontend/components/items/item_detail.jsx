import React from 'react';

const ItemDetail = ({item}) => {
  if (item) {
    return (
      <div>
        <h4>{item.name}</h4>
        <h5>Happiness: {item.happiness}</h5>
        <h5>Price: ${item.price}</h5>
      </div>
    );
  }
  return (<div></div>);
};

export default ItemDetail;
