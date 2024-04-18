import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './movies/movieSlice'

export const store = configureStore({
    // reducer: {},
    reducer: {
        movies: moviesReducer,
    }
})

//then add provider in index.js
// after creating movieSlice import and add moviesReducer
// then create dispatch in home component