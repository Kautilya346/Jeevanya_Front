import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assests/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center px-12 py-4 bg-[#dff2ff]">
      {/* Logo */}
      {/* <h1
        onClick={() => navigate("/")}
        className="text-4xl font-bold text-[#3498DB] cursor-pointer hover:scale-110 transition duration-300 ease-in-out tracking-wider"
        style={{ fontFamily: "Pixelcraft, sans-serif" }}
      >
        Jeevanya
      </h1> */}
      <img
        src={logo}
        alt=""
        onClick={() => navigate("/")}
        className="w-12 h-12 cursor-pointer"
      />

      {/* Navigation Links */}
      <div className="flex space-x-8 text-md text-gray-700">
        <button
          onClick={() => navigate("/about")}
          className="font-bold text-xl cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
        >
          About us
        </button>
        <button
          onClick={() => navigate("/userprofile")}
          className="font-bold text-xl cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
        >
          Profile
        </button>
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-2 text-xl bg-[#3498DB] text-white rounded-md cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
        >
          Login
        </button>
      </div>
    </div>
  );
}
