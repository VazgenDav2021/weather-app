import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { basicInfo } from '../../store/selectrors';
import { changeMeasureType } from '../../store/features/weatherReducer';

const TemperatureSwitcher = () => {
    const isCelsius = useAppSelector(basicInfo).selectedWeatherType === "celsius";
    
    const dispatch = useAppDispatch();
    const handleToggle = () => {
        // @ts-ignore
        dispatch(changeMeasureType({ name: isCelsius ? "fahrenheit" : "celsius" }));
    };
    
    return (
        <div>
            <label>
                <input type="checkbox" checked={isCelsius} onChange={handleToggle} />
                Celsius
            </label>
        </div>
    );
};

export default TemperatureSwitcher;
