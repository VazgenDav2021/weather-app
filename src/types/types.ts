
export interface Coord {
    lon: number;
    lat: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface Clouds {
    all: number;
}

export interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface WeatherData<T> {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: T;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export interface WeatherList<T> {
    temp: any;
    dt: number;
    main: T;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    snow?: { "3h": number };
    sys: { pod: string };
    dt_txt: string;
}

export interface WeatherCity {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}


export interface WeatherResponse<T, U> {
    payload: {
        cod: string
        message: number
        cnt: number
        list: {
            dt: number
            main: {
                dt: number
                main: Main;
                weather: {
                    id: number
                    main: string
                    description: string
                    icon: string
                }[]
                clouds: {
                    all: number
                }
                wind: {
                    speed: number
                    deg: number
                }
                visibility: number
                pop: number
                snow?: {
                    "3h": number
                } | undefined
                sys: {
                    pod: string
                }
                dt_txt: string
                temp: number;
            }
            weather: {
                id: number
                main: string
                description: string
                icon: string
            }[]
            clouds: {
                all: number
            }
            wind: {
                speed: number
                deg: number
            }
            visibility: number
            pop: number
            snow?: {
                "3h": number
            } | undefined
            sys: {
                pod: string
            }
            dt_txt: string
        }[]
        city: {
            id: number
            name: string
            coord: {
                lon: number
                lat: number
            }
            country: string
            population: number
            timezone: number
            sunrise: number
            sunset: number
        }
    };
    cod: string;
    message: number;
    cnt: number;
    list: WeatherList<T>[];
    city: U;
}

export interface AppStateInterface {
    selectedWeatherType: WeatherType,
    searchingLocation: string,
    weatherOfCurrentTime: WeatherData<Main>,
    weatherOfAllDay: WeatherResponse<WeatherList<Main>, WeatherCity>,
    isLoading: boolean,
    hasError: boolean,
    city: string;
}

export interface interfaceIAllDayData {
    time: string;
    icon: string;
    temp: number;
};

export enum WeatherType {
    FAHRENHEIT = "fahrenheit",
    CELSIUS = "celsius"
}