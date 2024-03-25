//@ts-nocheck
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { AppStateInterface } from "../types/types";
import { interfaceIAllDayData } from "../types/types";
import { ICurrnetWimteWeather } from "../types/componentsInterface";
import dayjs from "dayjs";

const selectDomain = (state: RootState) => state.weather;

export const basicInfo = createSelector([selectDomain], (info: AppStateInterface) => {
    return info;
});

export const weatherOfCurrentTime = createSelector([selectDomain], (info: AppStateInterface): ICurrnetWimteWeather => {
    const { weather, main } = info.weatherOfCurrentTime;
    return { cityName: info.weatherOfAllDay.city.name, weather: weather[0], main, isLoading: info.isLoading, hasError:info.hasError };
});

export const selectedMeasureType = createSelector([selectDomain], (info: AppStateInterface): string => {
    return info.selectedWeatherType;
});


const today = dayjs().startOf('day');
const tomorrow = today.add(1, 'day');

export const currentDayWeather = createSelector([selectDomain], (info: AppStateInterface): interfaceIAllDayData[] => {
    const reuslt = info.weatherOfAllDay.list.map(eachValue => {
        const { dt_txt, weather, main } = eachValue;
        return {
            time: dt_txt,
            icon: weather[0].icon,
            temp: main.temp
        };
    }).filter(item => {
        const itemTime = dayjs(item.time);
        return itemTime.isAfter(today) && itemTime.isBefore(tomorrow);
    });


    return reuslt
});


export const weatherOfWeek = createSelector([selectDomain], (info: AppStateInterface): interfaceIAllDayData[] => {
    const groupedData: Record<string, { temps: number[]; icons: string[] }> = info.weatherOfAllDay.list.reduce((acc, item) => {
        const date = dayjs.unix(item.dt).format('DD-MM');
        if (!acc[date]) {
            acc[date] = { temps: [], icons: [] };
        }
        acc[date].temps.push(item.main.temp);
        acc[date].icons.push(item.weather[0].icon);
        return acc;
    }, {});

    const averageTemperatures = Object.entries(groupedData).map(([date, data]) => {
        const averageTemp = data.temps.reduce((sum, temp) => sum + temp, 0) / data.temps.length;
        const icon = data.icons[Math.floor(data.icons.length / 2)]; // Pick the middle icon
        return { time: date, temp: averageTemp, icon };
    });

    return averageTemperatures;
});
