import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowDetails, getSelectedMovieOrShow } from '../features/movies.js/movieSlice';
const MovieDetail = () => {
  const {imdbID} =useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow)
  console.log(data)
  useEffect(()=>{
    dispatch(fetchAsyncMovieOrShowDetails(imdbID))
  },[dispatch,imdbID])
  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail