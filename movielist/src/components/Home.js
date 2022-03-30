import React from 'react'
import { useEffect } from 'react'
import MovieListing from './MovieListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows} from '../features/movies.js/movieSlice'
const Home = () => {

  const dispatch =useDispatch();
useEffect(()=>{
  
  dispatch(fetchAsyncMovies())
  dispatch(fetchAsyncShows())

   
}, [dispatch]);


  return (
    <>
    <div className='banner-image'>
      <MovieListing />
    </div>
    </>
  )
}

export default Home;