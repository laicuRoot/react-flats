import React from 'react';
import Flat from './flat';
// {
//     name: "Charm at the Steps of the Sacre Coeur/Montmartre",
//     imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
//     price: 164,
//     priceCurrency: "EUR",
//     lat: 48.884211,
//     lng: 2.34689
//   }

const FlatList = ({ flats, selectFlat, selectedFlat }) => {
  return (
    <div className='flat-list'>
      {flats.map((flat, index) => {
        return <Flat key={flat.name} flat={flat} selectFlat={selectFlat} index={index} selected={flat.name === selectedFlat.name} />;
      })}
    </div>
  );
};

export default FlatList;
