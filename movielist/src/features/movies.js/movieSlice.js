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


  export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetails",
    async (id) => {
      const response = await MovieAPI.get(
        `?apiKey=${APIkey}&i=${id}&Plot=full`
      );
     
      return response.data;
    }
  );


const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow:{},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) =>{
      state.selectMovieOrShow={}
    }
  },


  extraReducers :(builder)=>{
      builder.addCase(fetchAsyncMovies.fulfilled,(state, action)=>{
          state.movies =(action.payload)
      });

      builder.addCase(fetchAsyncShows.fulfilled,(state, action)=>{
        state.shows =(action.payload)
    })

    builder.addCase(fetchAsyncMovieOrShowDetails.fulfilled,(state, action)=>{
        state.selectMovieOrShow =(action.payload)
    })
  }


});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
