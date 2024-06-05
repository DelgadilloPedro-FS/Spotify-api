import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";
import NavBar from "../components/NavBar";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const accessToken = localStorage.getItem("token");
  const handleSearch = (query) => {
    axios
      .get(
        `https://api.spotify.com/v1/search?q=${query}&type=artist,track,album`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        const results = [];
        if (response.data.artists) {
          results.push(
            ...response.data.artists.items.slice(0, 6).map((artist) => ({
              name: artist.name,
              image: artist.images[0]?.url,
              type: "Artist",
              url: artist.external_urls.spotify,
            }))
          );
        }
        if (response.data.tracks) {
          results.push(
            ...response.data.tracks.items.slice(0, 5).map((track) => ({
              name: track.name,
              image: track.album.images[0]?.url,
              type: "Song",
              url: track.external_urls.spotify,
            }))
          );
        }
        if (response.data.albums) {
          results.push(
            ...response.data.albums.items.slice(0, 5).map((album) => ({
              name: album.name,
              image: album.images[0]?.url,
              type: "Album",
              url: album.external_urls.spotify,
            }))
          );
        }
        setSearchResults(results);
        console.log(results);
      })
      .catch((err) => {
        console.error("Error searching:", err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-700 p-8 flex items-center flex-col w-full">
      <NavBar />
      <h1 className="text-3xl font-bold text-white mb-6">Search</h1>
      <SearchBar
        onSearchChange={(value) => setSearchTerm(value)}
        onSubmit={handleSubmit}
      />
      <Results searchResults={searchResults} />
    </div>
  );
};

export default Search;
