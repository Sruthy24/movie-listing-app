import React from "react";

function MovieCard({ movie }) {

  return (

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

        <p>{movie.Year}</p>

        <p>{movie.Type}</p>

      </div>

    </div>

  );
}

export default MovieCard;
