import React from 'react'

const Weather = (props) => {
  return (
    <>
    <div>{props.city}</div>
    <div>{props.temp}</div>
    <div>{props.temp_min}</div>
    <div>{props.temp_max}</div>
    <div>{props.img}</div>
    <div>{props.type}</div>
    <div>{props.wind_speed}</div>
    </>
  )
}

export default Weather