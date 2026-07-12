import React from "react";

function MovieCard({ movie }) {

  const handleClick = () => {
    alert(movie.imdbID);
  };

  return (
    <div 
      className="card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >

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
