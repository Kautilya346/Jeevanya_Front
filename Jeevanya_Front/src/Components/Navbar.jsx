import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center px-8 py-2">
      <h1
        onClick={() => navigate("/")}
        className="text-3xl font-bold text-[#3498DB] cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
        style={{ fontFamily: "Pixelcraft, sans-serif" }}
      >
        Jeevanya
      </h1>
      <div className="flex space-x-6 text-sm text-gray-700">
        <button
          onClick={() => navigate("/aboutus")}
          className="font-bold text-lg cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
        >
          About us
        </button>
        <button
          onClick={() => navigate("/contactus")}
          className="font-bold text-lg cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
        >
          Contact us
        </button>
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-1 text-lg bg-black text-white rounded-md cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
        >
          Login
        </button>
      </div>
    </div>
  );
}
