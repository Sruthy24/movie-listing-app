import React from "react";

function SearchBar({ search, setSearch, searchMovie }) {

  return (

    <div className="search">

      <input
        type="text"
        placeholder="Search movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={searchMovie}>
        Search
      </button>

    </div>

  );
}

export default SearchBar;
