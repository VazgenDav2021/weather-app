import { configureStore } from "@reduxjs/toolkit";
import { weatherSlice } from "./features/weatherReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        weather: weatherSlice.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production'

})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
