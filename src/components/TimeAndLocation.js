import React from 'react'
import '../style.css'
import { formatToLocalTime } from '../services/WeatherServices'

const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <div>
        
        <div className='d-flex align-items-center justify-content-center mt-4 '>
          <p className='text-white fs-5 fw-light'>
          {formatToLocalTime(dt, timezone)}
          </p>
        </div>

        <div className='d-flex align-items-center justify-content-center'>
          <p className='text-white fs-2 fw-medium'>
          {`${name}, ${country}`}
          </p>
        </div>

    </div>
  )
}

export default TimeAndLocation