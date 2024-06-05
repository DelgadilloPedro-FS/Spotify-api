import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const accessToken = localStorage.getItem("token");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUser(response.data);
      console.log("USer: ", user);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error fetching user data: {error.message}</div>;
  }

  if (!user) {
    return <div>Loading user data...</div>;
  }
  const {
    display_name,
    images,
    followers: { total },
  } = user;
  const handleBack = () => {
    navigate("/search");
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-700 flex flex-col items-center justify-center p-8">
      <button
        onClick={handleBack}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 m-2 px-4 rounded-full shadow-md"
      >
        Back
      </button>
      <div className="flex flex-col items-center mb-8">
        <img
          src={images[0]?.url}
          alt={display_name}
          className="w-48 h-48 rounded-full object-cover shadow-md"
        />
        <h1 className="text-3xl font-bold text-white mt-4">{display_name}</h1>
      </div>
      <div className="flex items-center text-gray-400">
        <span className="mr-2">Followers:</span>
        <span className="font-bold">{total}</span>
      </div>
    </div>
  );
};

export default User;
