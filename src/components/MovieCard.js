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

        <div className="info">
          <h2>{movie.Title}</h2>

          <p>📅 {movie.Year}</p>

          <p>🎬 {movie.Type}</p>

          <button className="details-btn">
            View Details
          </button>
        </div>

      </div>
    </Link>
  );
}

export default MovieCard;
