import React, {useState} from 'react';

// {
//     name: "Charm at the Steps of the Sacre Coeur/Montmartre",
//     imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
//     price: 164,
//     priceCurrency: "EUR",
//     lat: 48.884211,
//     lng: 2.34689
//   }

function Flat({ flat, selectFlat, index, selected }) {

  const cardStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})`,
  };

  const handleClick = () => {
    selectFlat(index);
    // event.current.target;
  };


  return (
    <div onClick={handleClick} className={`card${selected ? ' active' : ''}`} style={cardStyle}>
      <div className="card-category">
        {flat.price}
        {flat.priceCurrency}
      </div>
      <div className="card-description">
        <h2>{flat.name}</h2>
      </div>
      <a className="card-link" href="#" />
    </div>
  );
};

export default Flat;
