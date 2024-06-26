import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Root from "./views/Root";
import Search from "./views/Search";
import User from "./views/User";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Location search:", location.search);
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      // Token obtained, store it in state or localStorage
      localStorage.setItem("token", token)
      // Optionally, navigate to another page
      navigate("/search");
    }
  }, [location.search, navigate]);

  return (
    <div className="">
      <section>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/search" element={<Search />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
