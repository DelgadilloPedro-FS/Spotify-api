// SearchBar.js
import React from "react";

const SearchBar = ({ searchTerm, onSearch }) => (
  <div className="search-bar">
    <form onSubmit={onSearch}>
      <input
        type="text"
        placeholder="Search for songs, artists, or playlists"
        className="w-full rounded-md border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)} // Update search term on input change
      />
    </form>
  </div>
);

export default SearchBar;
