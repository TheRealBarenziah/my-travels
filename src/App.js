import React, { Component } from 'react';
import Travels from './Travels';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>My Travels</h1>
      <Travels
        destination= "Cuneo"
        country="Italy"
        photo="https://upload.wikimedia.org/wikipedia/commons/4/48/Cuneo_Marktplatz01.jpg"
        credits="https://commons.wikimedia.org/wiki/File:Cuneo_Marktplatz01.jpg"
        distance="328.27 km"
      />
    <Travels
        destination= "Toledo"
        country="Spain"
        photo="https://upload.wikimedia.org/wikipedia/commons/2/26/Toledo_Skyline_Panorama%2C_Spain_-_Dec_2006.jpg"
        credits="https://commons.wikimedia.org/wiki/Toledo#/media/File:Toledo_Skyline_Panorama,_Spain_-_Dec_2006.jpg"
        distance="1161.289 km"
      />
    </div>
    );
  }
}

export default App;
