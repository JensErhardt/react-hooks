import React, { Component } from 'react';

import OldCounter from './Components/OldCounter';
import UseState from './Components/UseState';
import OldLifecycle from './Components/OldLifecycle';
import NewLifecycle from './Components/NewLife';
import Reducer from './Components/Reducer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OldCounter />
        <UseState />
        <OldLifecycle />
        <NewLifecycle />
        <Reducer />
      </div>
    );
  }
}

export default App;
