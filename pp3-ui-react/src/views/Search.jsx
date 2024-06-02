// Search.js (updated)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar"

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    // Implement search logic here (e.g., API call, filtering data)
    // Potentially navigate to results page with search term:
    // navigate(`/results?searchTerm=${searchTerm}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Search</h1>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <div className="mt-8">{searchTerm && <p>Search Term: {searchTerm}</p>}</div>
    </div>
  );
};

export default Search;
