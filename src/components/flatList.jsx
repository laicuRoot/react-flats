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

const FlatList = ({ flats }) => {
  return (
    <div>
      {flats.map((flat) => {
        return <Flat key={flat.name} flat={flat} />;
      })}
    </div>
  );
};

export default FlatList;
