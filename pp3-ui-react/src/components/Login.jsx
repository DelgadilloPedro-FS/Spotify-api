const Login = () => {
    
  return (
    <div className="flex p-3 m-2">
      <h3 className="">Please Sign In</h3>
      <p> You are not logged in</p>
      <a
        href="http://localhost:3001/pp3/v1/Login"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign In
      </a>
    </div>
  );
};

export default Login;
