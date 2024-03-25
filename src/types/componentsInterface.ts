import { Main, Weather, interfaceIAllDayData } from "./types";

export interface ICurrnetWimteWeather {
    cityName: string;
    main: Main;
    weather: Weather;
    isLoading: boolean;
    hasError: boolean;
};



export interface ICurrentDayWeather {
    [key: string]: interfaceIAllDayData[];
}