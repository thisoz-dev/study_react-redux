import React, { Component } from 'react';
import './App.css';
import AddNumberRoot from './components/addNumberRoot';
import DisplayNumberRoot from './components/displayNumberRoot';

class App extends Component {
  state = { number: 0 };

  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot />
        <DisplayNumberRoot />
      </div>
    );
  }
}

export default App;
