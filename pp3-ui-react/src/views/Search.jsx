import React, { useState, useEffect } from "react";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Search</h1>
      <input
        type="text"
        placeholder="Search for songs, artists, or playlists"
        className="w-full rounded-md border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
      />
      {/* <div className="mt-8">{searchTerm && <p>{searchTerm}</p>}</div> */}
    </div>
  );
};

export default Search;
