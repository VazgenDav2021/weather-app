import { AppStateInterface, WeatherType } from "../types/types";

export const initialState: AppStateInterface = {
    selectedWeatherType: WeatherType.CELSIUS,
    searchingLocation: "",
    weatherOfCurrentTime: {
        coord: {
            lon: 0,
            lat: 0,
        },
        weather: [],
        base: "",
        main: {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0,
        },
        visibility: 0,
        wind: {
            speed: 0,
            deg: 0,
        },
        clouds: {
            all: 0,
        },
        dt: 0,
        sys: {
            type: 0,
            id: 0,
            country: "",
            sunrise: 0,
            sunset: 0,
        },
        timezone: 0,
        id: 0,
        name: "",
        cod: 0,
    },
    weatherOfAllDay: {
        cod: "",
        message: 0,
        cnt: 0,
        list: [],
        city: {
            id: 0,
            name: "",
            coord: {
                lon: 0,
                lat: 0,
            },
            country: "",
            population: 0,
            timezone: 0,
            sunrise: 0,
            sunset: 0,
        },
        payload: {
            cod: "",
            message: 0,
            cnt: 0,
            list: [],
            city: {
                id: 0,
                name: "",
                coord: {
                    lon: 0,
                    lat: 0
                },
                country: "",
                population: 0,
                timezone: 0,
                sunrise: 0,
                sunset: 0
            }
        }
    },
    isLoading: true,
    hasError: false,
    city: ""
};
