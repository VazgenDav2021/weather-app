import React from 'react';
import { ICurrnetWimteWeather } from '../../types/componentsInterface';
import { useReturnTempReture } from '../../hooks/useReturnTempReture';
import './CurrentTimeWeather.scss';


const CurrentTimeWeather = ({ cityName, main, weather, ...rest }: ICurrnetWimteWeather) => {
  const transformedTempreture = useReturnTempReture(main?.temp);
  const weatherType = weather?.main;

  return (
    <div className='currentTime_weather'>
      <p>{cityName}</p>
      <p>{transformedTempreture}</p>
      <img src={`http://openweathermap.org/img/w/${weather?.icon}.png`} alt={cityName} />
      <p>{weatherType}</p>
    </div>
  );
};

export default CurrentTimeWeather;