import axios from 'axios'
import React, { useState } from 'react'

import WeatherInfo from './WeatherInfo'
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
      date: new Date(response.data.time * 1000),
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      feelsLike: response.data.temperature.feels_like,
      iconUrl: 'https://duckduckgo.com/assets/weather/icons/partly-cloudy-night.svg'
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  if (weatherData.load) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
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
        <WeatherInfo data={weatherData}/>
        
      </div>
    )

  } else {
  const apiKey = '43bt31f04370406a19041o929bffa216'
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse)

  return 'Loading...'
  }  
}