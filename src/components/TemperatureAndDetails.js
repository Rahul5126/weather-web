import React from 'react'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
    UilArrowUp,
    UilArrowDown
  } from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from '../services/WeatherServices';

const TemperatureAndDetails = ({weather: {description, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, pressure, visibility, timezone}}) => {
  return (
    <div>

        <div className='d-flex align-items-center justify-content-center text-uppercase fs-5' style={{color: '#6EE7B7'}}>
            <p>{description}</p>
        </div>

        <div className='d-flex flex-row align-items-center justify-content-between text-white mx-3'>
            <img src={iconUrlFromCode(icon)} alt='' className=' w-20 ' />
            <p className=' fs-1 mb-0 '>{`${temp.toFixed()}°`}</p>

            <div className=' d-flex flex-column '>
                <div className=' d-flex fw-light small align-items-center justify-content-center'>
                    <UilTemperature size={18} className=' me-1' />
                    Feels like:
                    <span className=' fw-medium m-lg-1'>{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className=' d-flex fw-light small align-items-center justify-content-center'>
                    <UilTear size={18} className=' me-1' />
                    Humidity:
                    <span className=' fw-medium m-lg-1'>{`${humidity.toFixed()}%`}</span>
                </div>
                <div className=' d-flex fw-light small align-items-center justify-content-center'>
                    <UilWind size={18} className=' me-1' />
                    Wind:
                    <span className=' fw-medium m-lg-1'>{`${speed.toFixed()} m/s`}</span>
                </div>
                <div className=' d-flex fw-light small align-items-center justify-content-center'>
                    <UilWind size={18} className=' me-1' />
                    Air Pressure:
                    <span className=' fw-medium m-lg-1'>{`${pressure.toFixed()} hPa`}</span>
                </div>
                <div className=' d-flex fw-light small align-items-center justify-content-center'>
                    <UilWind size={18} className=' me-1' />
                    Visibility:
                    <span className=' fw-medium m-lg-1'>{`${visibility} m`}</span>
                </div>
            </div>
        </div>

        <div className=' d-flex flex-row align-items-center justify-content-center me-2 text-white small py-5 '>
            <UilSun/>
            <p className=' fw-light mb-0 m-lg-2'>
                Rise:{" "}
                <span className='fw-medium m-lg-2'>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
            </p>
            <p className='fw-light mb-0 me-4'>|</p>

            <UilSunset/>
            <p className=' fw-light mb-0 m-lg-2'>
                Set:{" "}
                <span className='fw-medium m-lg-2'>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
            </p>
            <p className='fw-light mb-0 me-4'>|</p>

            <UilArrowUp/>
            <p className=' fw-light mb-0 m-lg-2'>
                High:{" "}
                <span className='fw-medium m-lg-2'>{`${temp_max.toFixed()}°`}</span>
            </p>
            <p className='fw-light mb-0 me-4 '>|</p>

            <UilArrowDown/>
            <p className=' fw-light mb-0 m-lg-2'>
                Low:{" "}
                <span className='fw-medium m-lg-2'>{`${temp_min.toFixed()}°`}</span>
            </p>
        </div>

    </div>
  )
}

export default TemperatureAndDetails