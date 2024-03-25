import React from 'react'
import { useReturnTempReture } from '../../hooks/useReturnTempReture'
import { interfaceIAllDayData } from '../../types/types';
import dayjs from 'dayjs';

const CurrentSlot = ({ time, temp, icon }: interfaceIAllDayData) => {
  const tempValue = useReturnTempReture(temp);
  return (
    <div className='each_time_slot'>
      <span>{dayjs(time).format("HH:mm:ss")}</span>
      <span>{tempValue}</span>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={time} />
    </div>
  )
}

export default CurrentSlot