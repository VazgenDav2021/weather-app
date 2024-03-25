import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { basicInfo, currentDayWeather, weatherOfCurrentTime, weatherOfWeek } from '../../store/selectrors';
import { getCurrentDayWeather } from '../../api/getCurrentDayWeather';
import { getWeekWeather } from '../../api/getWeekWeather';
import CurrentDayWeather from '../CurrentDayWeather/CurrentDayWeather';
import CurrentTimeWeather from '../CurrentTimeWeather/CurrentTimeWeather';
import CurrentWeekWeather from '../CurrentWeekWeather/CurrentWeekWeather';
import { ICurrnetWimteWeather } from '../../types/componentsInterface';
import { useParams } from 'react-router-dom';
import { changeCityName } from '../../store/features/weatherReducer';
import BaseModal from '../BaseModal/BaseModal';
import './WeatherContainer.scss';


interface ParamsType {
    city: string;
    // Add an index signature to satisfy the constraint
    [key: string]: string | undefined;
}

const WeatherContainer = () => {
    const state = useAppSelector(basicInfo);
    const { city } = useParams<ParamsType>();
    const { isLoading, hasError, ...rest } = useAppSelector(weatherOfCurrentTime);
    const allDayDate = useAppSelector(currentDayWeather);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const weatherOfAllWeek = useAppSelector(weatherOfWeek);
    const dispatch = useAppDispatch();
    const toggleOpenMenu = () => {
        setModalIsOpen((prev) => (!prev))

    };

    useEffect(() => {
        if (hasError) {
            toggleOpenMenu();
        }

        if (city?.length) {
            dispatch(changeCityName({ name: city }));
        }

        if (state.city) {
            dispatch(getCurrentDayWeather(state.city));
            dispatch(getWeekWeather(state.city));
        }


    }, [state.city, city]);


    if (isLoading) {
        return <p>Loading...</p>
    }

    if (hasError) {
        return <BaseModal isOpen={modalIsOpen} onRequestClose={toggleOpenMenu} />
    }


    return (
        <div className='weather_container'>
            <CurrentTimeWeather {...rest as ICurrnetWimteWeather} />
            <CurrentDayWeather allDayDate={allDayDate} />
            <CurrentWeekWeather allWeekDAte={weatherOfAllWeek} />
        </div>
    );
};

export default WeatherContainer;