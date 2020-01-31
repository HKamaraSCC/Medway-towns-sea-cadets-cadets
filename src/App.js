import React from 'react';
import logo from './sea-cadets-logo.png';
import cadetimage from './599d84578d94f-sc4.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      
        <h1>
          Medway Towns
        </h1>

<img src={cadetimage} className="Main-image"></img>

        <ul>
          <li><a href="https://outlook.live.com/owa/calendar/42df19e0-122f-4df9-ac61-62e4d99affce/e5f0a9eb-68ab-4bf5-8492-af7fc72831bf/cid-014213B9A49F5270/index.html">Unit Calendar</a></li>
          <li><a
            className="Training-Site" href="https://www.sccheadquarters.com" rel="noopener noreferrer"
          >
            SCC Training & Administration Site
        </a></li>
        <li><a href="https://www.facebook.com/Sea-Cadets-Medway-Towns-TS-Cornwallis-145290378871950/">Facebook</a></li>
        <li><a href="https://twitter.com/medwaytownssc?lang=en">Twitter</a></li>
        <li>Contact Us</li>
        </ul>
        </header>
    </div>
  );
}

export default App;
