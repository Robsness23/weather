import React from 'react';
import './App.css';
import Weather from './Weather'

export default function App() {
  return (
    <div className="App">
      <div className="container">
    <Weather defaultCity="Belfast" /> 
    <footer>
      A project coded by {" "}<a 
      href="https://www.robyn-smith.co.uk/"
      target="_blank"
      rel="noreferrer">Robyn Smith</a>.{" "}
      You can find it on {" "} <a 
      href="https://github.com/Robsness23/weather" 
      target="_blank" 
      rel="noreferrer">
        GitHub
      </a>.
    </footer>
    </div>
    </div>
  );
}

