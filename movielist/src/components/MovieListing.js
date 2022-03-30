import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../features/movies.js/movieSlice";
import MovieCard from "./MovieCard";

import './MovieListing.css';
function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let {renderMovies, renderShows} = "";

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


  renderShows =
  shows.Response === "True" ? (
    shows.Search.map((movie, index) => 
      <MovieCard key={index} data={movie} />
      )
  ) : (
    <div className="movies-error">
      <h3>{shows.Error}</h3>
    </div> 
)
console.log(renderShows.Response)

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2 style={{textAlign:"center"}}>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
        
      </div>

      <div className="show-list">
        <h2 style={{textAlign:"center"}}>Shows</h2>
        <div className="movie-container">{renderShows}</div>
        
      </div>

    </div>
  
  );
  
  }
export default MovieListing;
