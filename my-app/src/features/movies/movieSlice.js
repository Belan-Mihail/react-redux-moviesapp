import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIKey } from '../../common/apis/MovieApiKey'
import movieApi from '../../common/apis/movieApi'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    // const movieText = 'Harry';
    // const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
    return response.data
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
  // const serieText = 'Friends';
  // const response = await movieApi.get(`?apiKey=${APIKey}&s=${serieText}&type=series`)
  const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
  return response.data
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {
  const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`)
  return response.data
})

const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {},
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        
        removeMovieOrShow: (state) => {
          state.selectMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
          console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
          console.log("Fetched Successfully!");
          return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
          console.log("Rejected!");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
          console.log("Fetched Successfully!");
          return { ...state, shows: payload };
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
          console.log("Fetched Successfully!");
          return { ...state, selectMovieOrShow: payload };
        },
    },
})

export const { removeMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getMovieOrShow = (state) => state.movies.selectMovieOrShow
export default movieSlice.reducer

//const getAllMovies state.movies.movies == state.movies (name from movieSlice).movies (state from initailState)
//1:22:51