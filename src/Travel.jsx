import React from 'react';

const Travels = ({ destination, country, photo, credits, distance }) => (
  <div>
    <p><strong>Location:</strong> <em>{destination}</em></p>
    <p><strong>Country:</strong> <em>{country}</em></p>
    <img src={photo} alt={destination} width="66%"/>
    <p><a href={credits}>Credits for photo</a></p>
    <p><strong>Distance from Marseille:</strong> <em>{distance}</em></p>
    <hr></hr>
  </div>
);

export default Travels