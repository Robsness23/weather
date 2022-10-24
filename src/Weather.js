import React from 'react'
import './Weather.css'

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
        <input 
        type="search" 
        placeholder="Enter a city" 
        className="form-control" />
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary" />
        </div>
        </div>
      </form>
      <h1>Belfast</h1>
      <ul>
        <li>Thursday, 21:30</li>
        <li>Rain</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="https://duckduckgo.com/assets/weather/icons/partly-cloudy-night.svg" alt="Rain" style={{maxWidth: 80}} />
          10℃
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 87%</li>
            <li>Humidity: 68%</li>
            <li>Wind: 14km/h</li>
          </ul>

        </div>

      </div>
    </div>
  )
}