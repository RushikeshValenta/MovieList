import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import MovieAPI from "../../components/MovieAPI";
import { APIkey } from "../../components/APIkey";


export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await MovieAPI.get(
      `?apiKey=${APIkey}&s=${movieText}&type=movie`
    );
   
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async () => {
      const seriesText = "Friends";
      const response = await MovieAPI.get(
        `?apiKey=${APIkey}&s=${seriesText}&type=movie`
      );
     
      return response.data;
    }
  );



const initialState = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      console.log({ payload });
      state.movies = payload;
    },
  },


  extraReducers :(builder)=>{
      builder.addCase(fetchAsyncMovies.fulfilled,(state, action)=>{
          state.movies =(action.payload)
      });

      builder.addCase(fetchAsyncShows.fulfilled,(state, action)=>{
        state.shows =(action.payload)
    })
  }


});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
