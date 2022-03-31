import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetails,
  getSelectMovieOrShow,
  removeSelectedMovieOrShow
} from "../features/movies.js/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectMovieOrShow);

  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetails(imdbID));
    return ()=>{
      dispatch(removeSelectedMovieOrShow());
    }
  }, [dispatch, imdbID]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "40px 0px",
        fontWeight: 400,
      }}
      className="movie-section"
    >
      <div className="section-left">
        <div style={{ fontSize: "40px" }} className="movie-title">
          {data.Title}
        </div>
        <div
          style={{ paddingLeft: "3px", marginTop: "20px", display: "flex" }}
          className="movie-rating"
        >
          <span>
            IMDB Rating{" "}
            <i style={{ color: "#ff9e00" }} className="fa fa-star"></i>:
            {data.imdbRating}
          </span>
          <span>
            IMDB Votes <i className="fa fa-thumbs-up"></i>:{data.imdbVotes}
          </span>
          <span>
            Runtime <i className="fa fa-film"></i>:{data.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calendar"></i>:{data.Year}
          </span>
        </div>
        <div
          style={{ marginTop: "20px", lineHeight: "1.8rem" }}
          className="movie-plot"
        >
          {data.Plot}
        </div>
        <div
          style={{
            padding: "10px 0px",
            fontWeight: "600",
            width: "100px",
            display: "flex",
          }}
          className="movie-info"
        >
          <div>
            <span
              style={{
                padding: "10px 0px",
                fontWeight: "600",
                width: "100px",
                display: "inline-block",
              }}
            >
              Director
            </span>
            <span
              style={{
                padding: "10px 0px",
                fontWeight: "600",
                width: "100px",
                display: "inline-block",
              }}
            >
              {data.Director}
            </span>
          </div>
          <div>
            <span
              style={{
                padding: "10px 0px",
                fontWeight: "600",
                width: "100px",
                display: "inline-block",
              }}
            >
              Stars
            </span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span
              style={{
                padding: "10px 0px",
                fontWeight: "600",
                width: "100px",
                display: "inline-block",
              }}
            >
              Generes
            </span>
            <span
              style={{
                padding: "10px 0px",
                fontWeight: "600",
                width: "100px",
                display: "inline-block",
              }}
            >
              {data.Genre}
            </span>
          </div>
          <div>
            <span
              style={{
                padding: "10px 0px",
                fontWeight: "600",
                width: "100px",
                display: "inline-block",
              }}
            >
              Languages
            </span>
            <span
              style={{
                padding: "10px 0px",
                fontWeight: "600",
                width: "100px",
                display: "inline-block",
              }}
            >
              {data.Language}
            </span>
          </div>
          <div>
            <span
              style={{
                padding: "10px 0px",
                fontWeight: "600",
                width: "100px",
                display: "inline-block",
              }}
            >
              Awards
            </span>
            <span
              style={{
                padding: "10px 0px",
                fontWeight: "600",
                width: "100px",
                display: "inline-block",
              }}
            >
              {data.Awards}
            </span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img
          style={{ marginLeft: "30px" }}
          src={data.Poster}
          alt={data.Title}
        />
      </div>
    </div>
  );
};

export default MovieDetail;
