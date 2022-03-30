import { createSlice} from "@reduxjs/toolkit";

// export const fetchAsyncMovies = createAsyncThunk(
//     "movies/fetchAsyncMovies", 
//     async () => {
//         const movieText = "Harry";
//         const response = await MovieAPI.get(`?APIkey=${APIkey}&s=${movieText}&type=movie`);
//         return response.data;
//     }
// )

const initialState ={
    movies:{},
}

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies: (state, { payload }) => {
            console.log({payload})
            state.movies = payload;
        }
    },

    // extraReducers: {
    //     [fetchAsyncMovies.pending]:()=>{
    //         console.log("pending");
    //     },
    //     [fetchAsyncMovies.fulfilled]:(state, { paylod }) =>{
    //         console.log("Fetched Successfully!", paylod);
    //         return {...state, movies:paylod};
    //     },
    //     [fetchAsyncMovies.rejected]: ()=>{
    //         console.log("rejected!")
    //     }
        
    // }
});


export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;