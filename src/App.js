import React, { Component } from 'react';
import RetroHitCounter from 'react-retro-hit-counter';
import './App.css';
import * as fs from 'fs';

type State = {
  hits: number,
};

this.state = {
  hits: 0,
};

class App extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// <RetroHitCounter hits={this.state.hits} />

export default App;
