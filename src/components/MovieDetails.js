import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = "ce5d3e77";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details">
      <img src={movie.Poster} alt={movie.Title} />

      <div className="details-info">
        <h1>{movie.Title}</h1>

        <p><strong>Year:</strong> {movie.Year}</p>

        <p><strong>Genre:</strong> {movie.Genre}</p>

        <p><strong>Runtime:</strong> {movie.Runtime}</p>

        <p><strong>Director:</strong> {movie.Director}</p>

        <p><strong>Actors:</strong> {movie.Actors}</p>

        <p><strong>IMDb Rating:</strong> ⭐ {movie.imdbRating}</p>

        <p><strong>Plot:</strong> {movie.Plot}</p>

        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default MovieDetails;
