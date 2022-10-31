import axios from 'axios'
import React, { useState } from 'react'
import './Weather.css'

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ load: false })

  function handleResponse(response) {    
    console.log(response.data)
    setWeatherData({
      load: true,
      temp: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      feelsLike: response.data.temperature.feels_like,
      iconUrl: 'https://duckduckgo.com/assets/weather/icons/partly-cloudy-night.svg',
      date: "Monday, 31 October 2022"
    })
  }

  if (weatherData.load) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input 
                type="search" 
                placeholder="Enter a city" 
                className="form-control" 
                autoFocus="on"              
              />
            </div>
            <div className="col-3">
              <input 
                type="submit" 
                value="Search" 
                className="btn btn-primary w-100" 
              />
            </div>
          </div>
        </form>
        <h1 className="text-capitalize">{weatherData.condition}</h1>
        <ul>
          <li>{weatherData.city}</li>
          <li>{weatherData.date}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.condition} style={{maxWidth: 90}} />
            <span className="temperature">{Math.round(weatherData.temp)}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like: {Math.round(weatherData.feelsLike)}°C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    )

  } else {
  const apiKey = '43bt31f04370406a19041o929bffa216'
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse)

  return 'Loading...'
  }  
}