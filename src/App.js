import React, { Component } from 'react';
import Travels from './Travels';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Travels</h1>
        <hr></hr>
        <Travels />
      </div>
    );
  }
}

export default App;
