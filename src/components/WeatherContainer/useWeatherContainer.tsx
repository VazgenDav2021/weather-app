import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/store';
import { basicInfo, currentDayWeather, weatherOfCurrentTime, weatherOfWeek } from '../../store/selectrors';
import { useParams } from 'react-router-dom';
import { changeCityName } from '../../store/features/weatherReducer';
import { getCurrentDayWeather } from '../../api/getCurrentDayWeather';
import { getWeekWeather } from '../../api/getWeekWeather';

interface ParamsType {
    city: string;
    // Add an index signature to satisfy the constraint
    [key: string]: string | undefined;
};

const useWeatherContainer = () => {
    const state = useAppSelector(basicInfo);
    const { city } = useParams<ParamsType>();
    const { isLoading, hasError, ...rest } = useAppSelector(weatherOfCurrentTime);
    const allDayDate = useAppSelector(currentDayWeather);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const weatherOfAllWeek = useAppSelector(weatherOfWeek);
    const dispatch = useAppDispatch();
    const toggleOpenMenu = () => setModalIsOpen((prev) => (!prev));
    
    useEffect(() => {
        if (city?.length) {
            dispatch(changeCityName({ name: city }));
        };

        if (state.city) {
            dispatch(getCurrentDayWeather(state.city));
            dispatch(getWeekWeather(state.city));
        };


        if (hasError) {
            setModalIsOpen(true)
        };

    }, [state.city, city]);


    return { hasError, modalIsOpen, toggleOpenMenu, rest, allDayDate, weatherOfAllWeek, isLoading };

};

export default useWeatherContainer;