const Root = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-700 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-white">Sputifie</h1>
      <h3 className="text-xl text-white mt-4">Welcome Back</h3>
      <p className="text-gray-400 mb-8">Sign in to start listening.</p>
      <a
        href="http://localhost:3001/pp3/v1/login"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
      >
        Sign In with Spotify
      </a>
    </div>
  );
};

export default Root;
