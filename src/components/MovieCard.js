import React from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {

  const navigate = useNavigate();

  return (
    <div 
      className="card"
      onClick={() => navigate(`/movie/${movie.imdbID}`)}
    >

      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450"
        }
        alt={movie.Title}
      />

      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>

    </div>
  );
}

export default MovieCard;
