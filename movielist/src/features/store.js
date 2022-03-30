import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './movies.js/movieSlice'

export const store = configureStore({
    reducer: { 
        movies: moviesReducer,
    }
})