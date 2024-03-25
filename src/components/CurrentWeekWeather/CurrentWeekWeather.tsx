import React from 'react'
import { ICurrentDayWeather } from '../../types/componentsInterface'
import EachDaySlot from '../EachDaySlot/EachDaySlot'
import "./CurrentWeekWeather.scss"

const CurrentWeekWeather = ({ allWeekDAte }: ICurrentDayWeather) => {
  return (
    <div className='week_wrapper'>
      {allWeekDAte.map((eachSlot, index) => {
        return <EachDaySlot key={`${eachSlot.time}-${index}`} {...eachSlot} />
      })}
    </div>
  )
}

export default CurrentWeekWeather