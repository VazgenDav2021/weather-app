import React, { useMemo } from 'react';
import { useAppSelector } from '../store/store';
import { selectedMeasureType } from '../store/selectrors';

export const useReturnTempReture = (value: number): string => {
    const measureType = useAppSelector(selectedMeasureType);
    const meauseValue = useMemo(() => {
        if (measureType === 'celsius') {
            const celsiusValue = (value - 273.15)
            return `${celsiusValue.toFixed(1)} °C`;
        } else {
            return `${value.toFixed(1)} °F`;
        }
    }, [value, measureType])

    return meauseValue;
};