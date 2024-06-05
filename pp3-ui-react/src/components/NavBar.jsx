import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleUsersClick = () => {
    navigate("/user"); 
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-gradient-to-r from-gray-800 to-gray-700 text-white flex items-center justify-between px-8 z-50">
      <h1 className="text-xl font-bold">Sputifie</h1>
      <button
        onClick={handleUsersClick}
        className="text-lg font-medium hover:underline"
      >
        Profile
      </button>
    </nav>
  );
};

export default NavBar;
