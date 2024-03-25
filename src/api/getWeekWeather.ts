import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig } from "axios";

export const getWeekWeather = createAsyncThunk(
    'persons/getWeekWeather',
    async (CITY_NAME: string, { signal }) => {
        const controller = new AbortController();
        signal.addEventListener('abort', () => {
            controller.abort();
        });

        const API_KEY = process.env.REACT_APP_API_KEY ?? "";

        const config: AxiosRequestConfig = {
            signal: controller.signal,
        };

        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&appid=${API_KEY}`, config);
            return response.data;
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log('Request canceled', error.message);
            } else {
                throw error;
            }
        }
    }
);
