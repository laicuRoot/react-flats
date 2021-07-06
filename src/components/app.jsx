import React, { Component } from 'react';

import flats from '../../data/flats';
import FlatList from './flatList';
import Map from './googleReactMap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats,
      selectedFlat: flats[0]
    };
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} selectFlat={this.selectFlat} />
        <Map coor={this.state.selectedFlat} />
      </div>
    );
  }
}

export default App;
