import React from 'react';
import { iconUrlFromCode} from '../services/WeatherServices';

const Forecast = (title, items) => {
  return (
    <div>
          <div className='d-flex align-items-center justify-content-start mt-2'>
            <p className='text-white fw-medium text-uppercase'>{title}</p>
          </div>

          <hr className='m-0' style={{ border: '2px solid white' }} />

          <div className='d-flex flex-row align-items-center justify-content-between text-white'>
          {items.map((item, index) => (
              <div key={index} className='d-flex flex-column align-items-center justify-content-center'>
                <p className='fw-light small mb-0 mt-2'>{item.title}</p>
                <img src={iconUrlFromCode(item.icon)} alt='' className='img-fluid w-50' />
                <p className='fw-medium'>{`${item.temp.toFixed()}°`}</p>
              </div>
          ))}
          </div>
    </div>
  );
};

export default Forecast;



