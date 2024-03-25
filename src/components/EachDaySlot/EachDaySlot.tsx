import React from 'react';
import { interfaceIAllDayData } from '../../types/types';
import { useReturnTempReture } from '../../hooks/useReturnTempReture';
import { NavLink, useParams } from 'react-router-dom';

interface ParamsType {
    date: string;
    // Add an index signature to satisfy the constraint
    [key: string]: string | undefined;
};

const EachDaySlot = ({ time, temp, icon }: interfaceIAllDayData) => {
    const { date, city } = useParams<ParamsType>();
    const tempValue = useReturnTempReture(temp);

    return (
        <NavLink to={`/${city}/${time}`} className={`each_time_slot${date === time ? " active" : ""}`}>
            <span>{time}</span>
            <span>{tempValue}</span>
            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={time} />
        </NavLink>
    );
};

export default EachDaySlot;