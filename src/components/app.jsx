import React, { Component } from 'react';

import flats from '../../data/flats';
import Flat from './flat';
import FlatList from './flatList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: flats
    };
  }
  render() {
    {console.log(this.state.flats)}
    return (
      <div>
        <FlatList flats={this.state.flats} />
      </div>
    );
  }
}

export default App;
