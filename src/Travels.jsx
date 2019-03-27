import React from 'react'
import Travel from './Travel'

const travels = [
  {
    destination:"Cuneo",
    country:"Italy, EU",
    photo:"https://upload.wikimedia.org/wikipedia/commons/4/48/Cuneo_Marktplatz01.jpg",
    credits:"https://commons.wikimedia.org/wiki/File:Cuneo_Marktplatz01.jpg",
    distance:"328.27 km"
  },
  {
    destination:"Toledo",
    country:"Spain, EU",
    photo:"https://upload.wikimedia.org/wikipedia/commons/2/26/Toledo_Skyline_Panorama%2C_Spain_-_Dec_2006.jpg",
    credits:"https://commons.wikimedia.org/wiki/Toledo#/media/File:Toledo_Skyline_Panorama,_Spain_-_Dec_2006.jpg",
    distance: "1161.289 km"
  },
  {
    destination:"Arcadia Bay",
    country:"Oregon, USA",
    photo:"http://vignette2.wikia.nocookie.net/life-is-strange/images/5/52/Arcadia_Bay.jpg/revision/latest?cb=20150623212003",
    credits:"http://vignette2.wikia.nocookie.net/life-is-strange/images/5/52/Arcadia_Bay.jpg/revision/latest?cb=20150623212003",
    distance:"∞"
  },
  {
    destination:"Wayrest Castle, Wayrest",
    country:"High Rock, Tamriel",
    photo:"https://vignette.wikia.nocookie.net/elderscrolls/images/c/ca/Castle_Wayrest_%28Daggerfall%29.png/revision/latest?cb=20140901173625",
    credits:"https://elderscrolls.fandom.com/wiki/Castle_Wayrest_(Daggerfall)",
    distance: "∞"
  },
  {
    destination:"Vice City",
    country:"Florida, USA",
    photo:"https://i.ytimg.com/vi/wndkLSbwnRc/maxresdefault.jpg",
    credits:"https://i.ytimg.com/vi/wndkLSbwnRc/maxresdefault.jpg",
    distance: "∞"
  },
  {
    destination:"Orgrimmar",
    country:"Kalimdor, Azeroth",
    photo:"https://gamepedia.cursecdn.com/wowpedia/b/bb/Orgrimmar_HotS.jpg",
    credits:"https://gamepedia.cursecdn.com/wowpedia/b/bb/Orgrimmar_HotS.jpg",
    distance: "∞"
  }
];


const Travels = () => (
  <div>
    {travels.map((travel, i) => (
      <Travel destination={travel.destination} country={travel.country} photo={travel.photo} credits={travel.credits} distance={travel.distance} key={`myPimpedKeyIs`+[i]}/>
    ))}
  </div>
);

export default Travels