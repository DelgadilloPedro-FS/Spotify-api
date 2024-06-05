const Results = ({ searchResults }) => {
  return (
    <div className="mt-8">
      {searchResults.map((result, index) => (
        <div key={index} className="result-item flex items-center p-4 rounded-lg shadow-md hover:bg-gray-200">
          <img
            className="w-20 h-20 rounded-lg mr-4 object-cover"
            src={result.image}
            alt={result.name}
          />
          <div className="flex-grow">
            <p className="text-lg font-semibold mb-1">{result.name}</p>
            <p className="text-gray-600">{result.type}</p>
            <a href={result.url} className="text-blue-500 hover:underline">
              Link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
