import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

const API_KEY = "ce5d3e77";

// Home Page
function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("Batman");

  useEffect(() => {
    fetchMovies("Batman");
  }, []);

  const fetchMovies = async (movie) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`
      );

      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchMovie = () => {
    if (search.trim() !== "") {
      fetchMovies(search);
    }
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
          <h2 className="no-movie">No Movies Found</h2>
        )}
      </div>
    </div>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
