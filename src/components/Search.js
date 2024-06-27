import React, { useState } from 'react'
import '../style.css'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Search({ setQuery, units, setUnits }) {

  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) 
    setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city })
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className='d-flex flex-row justify-content-center my-3'>

        <div className='d-flex flex-row align-items-center justify-content-center search-items'>
            <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type='text' placeholder='Search for city....' className='text-xl font-weight-light p-2 w-100 input-item'/>
            <UilSearch onClick={handleSearchClick} size={25} className='text-white search-icons' />
            <UilLocationPoint onClick={handleLocationClick} size={25} className='text-white search-icons' />
        </div>

        <div className='d-flex flex-row mx-4 align-items-center justify-content-center'>
            <span onClick={handleUnitsChange} name="metric" className='text-xl font-weight-light text-white temp-scale'>°C</span>
            <span className='text-xl text-white mx-1'>|</span>
            <span onClick={handleUnitsChange} name="imperial" className='text-xl font-weight-light text-white temp-scale'>°F</span>
        </div>


    </div>
  )
}

export default Search