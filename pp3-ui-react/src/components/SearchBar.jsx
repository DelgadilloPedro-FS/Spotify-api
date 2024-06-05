const SearchBar = ({ searchTerm, onSearchChange, onSubmit }) => (
  <div className="search-bar w-3/4">
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search for songs, artists, or playlists"
        className="w-full rounded-md border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </form>
  </div>
);

export default SearchBar;
