import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movies: {},
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
        }
    },
})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer

//const getAllMovies state.movies.movies == state.movies (name from movieSlice).movies (state from initailState)
//45:00