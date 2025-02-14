import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h2 className="font-bold text-3xl text-center mb-4 text-indigo-700">
        REDUX BASICS
      </h2>
      <div className="flex justify-center space-x-4">
        <div
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={() => navigate("/redux")}
        >
          Redux
        </div>
        <div
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={() => navigate("/rtk")}
        >
          RTK
        </div>
      </div>
    </div>
  );
}

export default App;
