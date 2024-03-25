import React from 'react';
import CurrentDayWeather from '../CurrentDayWeather/CurrentDayWeather';
import CurrentTimeWeather from '../CurrentTimeWeather/CurrentTimeWeather';
import CurrentWeekWeather from '../CurrentWeekWeather/CurrentWeekWeather';
import { ICurrnetWimteWeather } from '../../types/componentsInterface';
import BaseModal from '../BaseModal/BaseModal';
import useWeatherContainer from './useWeatherContainer';
import './WeatherContainer.scss';




const WeatherContainer = () => {

    const { hasError, modalIsOpen, toggleOpenMenu, rest, allDayDate, weatherOfAllWeek, isLoading } = useWeatherContainer();

    if (isLoading) {
        return <p>Loading...</p>
    };

    if (hasError) {
        return <BaseModal isOpen={modalIsOpen} onRequestClose={toggleOpenMenu} />
    };

    return (
        <div className='weather_container'>
            <CurrentTimeWeather {...rest as ICurrnetWimteWeather} />
            <CurrentDayWeather allDayDate={allDayDate} />
            <CurrentWeekWeather allWeekDAte={weatherOfAllWeek} />
        </div>
    );
};

export default WeatherContainer;