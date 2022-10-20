import React from 'react';
import './App.css';
import Weather from './Weather'

export default function App() {
  return (
    <div className="App">
      <div className="container">
    <Weather /> 
    <footer>
      Coded by <a 
      href="https://www.robyn-smith.co.uk/"
      target="_blank"
      rel="noreferrer">
      Robyn Smith</a> <br />
      <a 
      href="https://github.com/Robsness23/weather" 
      target="_blank" 
      rel="noreferrer">
        Open-sourced on GitHub
      </a>
    </footer>
    </div>
    </div>
  );
}

