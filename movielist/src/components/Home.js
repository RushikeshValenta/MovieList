import React from 'react'
import { useEffect } from 'react'
import MovieListing from './MovieListing'
import MovieAPI from './MovieAPI'
import  {APIkey}  from './APIkey'
import { useDispatch } from 'react-redux'
import { addMovies } from '../features/movies.js/movieSlice'
const Home = () => {
  const movieText ="Harry";
  const dispatch =useDispatch();
useEffect(()=>{
  const fetchMovies = async () =>{
    const response = await MovieAPI.get(`?apiKey=${APIkey}&s=${movieText}&type=movie`)
      .catch ((err) =>{
        console.log("Err :", err);
      });
      dispatch(addMovies(response.data));
  }
  fetchMovies()
   
}, []);


  return (
    <>
    <div className='banner-image'>
      <MovieListing />
    </div>
    </>
  )
}

export default Home;