import React from 'react'
import CityInput from './CityInput'
import Button from './Button'
import './Weather.css';

const Weather = () => {
  return (
    <div className='container'>
        <CityInput/>
        <Button/>
        <div className="box">
                
        </div>
      
    </div>
  )
}

export default Weather
