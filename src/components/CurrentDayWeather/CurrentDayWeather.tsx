import React from 'react';
import { ICurrentDayWeather } from "../../types/componentsInterface";
import CurrentSlot from '../CurrentSlot/CurrentSlot';
import './CurrentDayWeather.scss';

const CurrentDayWeather = ({ allDayDate }: ICurrentDayWeather) => {
  return <div className="current_day_container">
    {allDayDate.map((eachSlot, index) => {
      return <CurrentSlot key={`${eachSlot.time}-${index}`} {...eachSlot} />
    })}
  </div>
};

export default React.memo(CurrentDayWeather);
