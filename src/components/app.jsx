import React, { Component } from 'react';

import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: flats
    };
  }
  render() {
    return (
      <div>
        Hello
      </div>
    );
  }
}

export default App;
