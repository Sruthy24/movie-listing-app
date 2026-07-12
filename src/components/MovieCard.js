import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link 
      to={`/movie/${movie.imdbID}`} 
      className="movie-link"
    >
      <div className="card">

        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450"
          }
          alt={movie.Title}
        />

        <div className="card-content">
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
        </div>

      </div>
    </Link>
  );
}

export default MovieCard;
