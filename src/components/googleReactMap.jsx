import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './marker';


const Map = ({ coor }) => {
  const defaultProps = {
    center: {
      lat: coor.lat,
      lng: coor.lng
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker key={coor.lat} lat={coor.lat} lng={coor.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
