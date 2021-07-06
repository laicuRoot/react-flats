import React from 'react';

// {
//     name: "Charm at the Steps of the Sacre Coeur/Montmartre",
//     imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
//     price: 164,
//     priceCurrency: "EUR",
//     lat: 48.884211,
//     lng: 2.34689
//   }

const Flat = ({ flat, selectFlat, index, selected }) => {
  const cardStyle = {
    backgroundImage: `url(${flat.imageUrl})`,
  };

  const handleClick = () => {
    selectFlat(index);
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
