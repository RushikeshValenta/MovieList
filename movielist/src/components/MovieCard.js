import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { data } = props;
  return (
    <div
      style={{
        backgroundColor: "light-gray",
        cursor: "pointer",
        hover: "active",
      }}
      className="card-item"
    >
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div style={{ height: "300px" }} className="card-top">
            <img
              style={{ width: "100%", height: "100%" }}
              src={data.Poster}
              alt={data.Title}
            />
          </div>
          <div style={{ padding: "20px" }} className="card-bottom">
            <div className="card-info">
              <h4
                style={{
                  fontSize: "22px",
                  fontWeight: "400",
                  marginBottom: "10px",
                }}
              >
                {data.Title}
              </h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
