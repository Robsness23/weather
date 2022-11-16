import React from "react"
import FormattedDate from './FormattedDate'

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
    <h1 className="text-capitalize">{props.data.condition}</h1>
        <ul>
          <li>{props.data.city}</li>
          <li><FormattedDate date={props.data.date} /></li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={props.data.icon} alt={props.data.condition} style={{maxWidth: 120}} />
            <span className="temperature">{Math.round(props.data.temp)}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like: {Math.round(props.data.feelsLike)}°C</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}km/h</li>
            </ul>
          </div>
        </div>
        </div>
  )
}