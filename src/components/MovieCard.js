import React from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {

  const navigate = useNavigate();

  function openDetails() {
  console.log("Clicked:", movie.imdbID);
  navigate(`/movie/${movie.imdbID}`);
}

  return (
    <div className="card" onClick={openDetails}>

      <img
        src={movie.Poster}
        alt={movie.Title}
      />

      <h2>{movie.Title}</h2>

      <p>{movie.Year}</p>

    </div>
  );
}

export default MovieCard;
