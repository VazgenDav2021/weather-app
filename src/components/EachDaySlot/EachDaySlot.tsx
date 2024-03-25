import React from 'react'
import { interfaceIAllDayData } from '../../types/types'
import dayjs from 'dayjs'
import { useReturnTempReture } from '../../hooks/useReturnTempReture';

const EachDaySlot = ({ time, temp, icon }: interfaceIAllDayData) => {
    const tempValue = useReturnTempReture(temp);
    return (
        <div className='each_time_slot'>
            <span>{time}</span>
            <span>{tempValue}</span>
            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={time} />
        </div>
    )
}

export default EachDaySlot