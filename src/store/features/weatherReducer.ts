import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '../initalState';
import { getCurrentDayWeather } from '../../api/getCurrentDayWeather';
import { Main, WeatherCity, WeatherData, WeatherList, WeatherResponse, WeatherType } from '../../types/types';
import { getWeekWeather } from '../../api/getWeekWeather';

export const weatherSlice = createSlice({
    name: 'weatherApp',
    initialState,
    reducers: {
        changeCityName: (state, action: PayloadAction<{ name: string }>) => {
            state.city = action.payload.name
        },
        changeMeasureType: (state, action: PayloadAction<{ name: WeatherType }>) => {
            state.selectedWeatherType = action.payload.name;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCurrentDayWeather.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(getCurrentDayWeather.fulfilled, (state, action: PayloadAction<WeatherData<Main>>) => {
                state.isLoading = false;
                state.hasError = false;
                state.weatherOfCurrentTime = action.payload;
            })
            .addCase(getCurrentDayWeather.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(getWeekWeather.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(getWeekWeather.fulfilled, (state, action: PayloadAction<WeatherResponse<WeatherList<Main>, WeatherCity>>) => {
                state.isLoading = false;
                state.hasError = false;
                state.weatherOfAllDay = action.payload;
            })
            .addCase(getWeekWeather.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            });
    },
});

export const { changeCityName, changeMeasureType } = weatherSlice.actions;
export default weatherSlice.reducer;
