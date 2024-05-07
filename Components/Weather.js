import React from 'react'

const Weather = (props) => {
  return (
    <>
    <div className='weather-container'>
      <div>
        <div>CITY</div>
        <div>{props.city}</div>
      </div>

      <div>
        <div>TEMP</div>
        <div>{props.temp-273}</div>
      </div>

      <div>
        <div>MIN TEMP</div>
        <div>{props.temp_min}</div>
      </div>

      <div>
        <div>MAX TEMP</div>
        <div>{props.temp_max}</div>
      </div>

      <div>
        <div Style="Display:none;"></div>
        <div>{props.img}</div>
      </div>

      <div>
        <div>TYPE</div>
        <div>{props.type}</div>
      </div>

      <div>
        <div>WIND SPEED</div>
        <div>{props.wind_speed}</div>
      </div>

    </div>
    </>
  )
}

export default Weather