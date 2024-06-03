// Search.js (updated)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar"

const Search = (accessToken) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
 console.log(accessToken)
  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    // Implement search logic here (e.g., API call, filtering data)
    // Potentially navigate to results page with search term:
    // navigate(`/results?searchTerm=${searchTerm}`);
    
  };
  useEffect(() => {
    if (searchTerm) {
      // Define your API endpoint and query parameters here
      const apiUrl = `https://api.example.com/search?q=${searchTerm}`;
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      // Make the API call
      axios.get(apiUrl, { headers })
        .then((response) => {
          setSearchResults(response.data);
          console.log("Search Results:", response.data);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    }
  }, [searchTerm, accessToken]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Search</h1>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <div className="mt-8">{searchTerm && <p>Search Term: {searchTerm}</p>}</div>
    </div>
  );
};

export default Search;