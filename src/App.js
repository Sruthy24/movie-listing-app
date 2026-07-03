import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import "./App.css";

const API_KEY = "YOUR_API_KEY";

function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("Batman");

  useEffect(() => {
    fetchMovies(search);
  }, []);

  const fetchMovies = async (movie) => {

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`
    );

    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  const searchMovie = () => {
    fetchMovies(search);
  };

  return (
    <div className="App">

      <h1>🎬 Movie Search Library</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
        searchMovie={searchMovie}
      />

      <div className="movie-container">

        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
            />
          ))
        ) : (
          <h2>No Movies Found</h2>
        )}

      </div>

    </div>
  );
}

export default App;
