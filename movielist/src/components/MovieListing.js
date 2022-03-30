import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../features/movies.js/movieSlice";
import MovieCard from "./MovieCard";

import './MovieListing.css';
function MovieListing() {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => 
        <MovieCard key={index} data={movie} />
        )
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    
  )
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2 style={{textAlign:"center"}}>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
  
  }
export default MovieListing;
