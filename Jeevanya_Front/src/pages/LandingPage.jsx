import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import Consulting from "../Components/Consulting";

const Jeevanya = () => {
  const navigate = useNavigate();
  const [hoverIndex, setHoverIndex] = useState(null);

  const buttons = [
    {
      label: "Connect",
      hoverText: "Connect with a doctor",
      path: "/contactdoctor",
    },
    {
      label: "Diagnosis",
      hoverText: "Get a medical diagnosis",
      path: "/aidiagnose",
    },
    {
      label: "Profile",
      hoverText: "View your health profile",
      path: "/userprofile",
    },
    { label: "Forum", hoverText: "Join health discussions", path: "/forum" },
  ];

  return (
    <div
      style={{ fontFamily: "Barlow, sans-serif" }}
      className="min-h-screen bg-gradient-to-br from-[#E1F5FE] via-[#D4F1F4] to-[#FFFFFF] p-6"
    >
      {/* Navbar */}

      {/* Hero Section */}
      <div className="bg-gradient-to-t from-[#EAF6FF] to-white rounded-4xl p-10 mt-10 shadow-md flex justify-between">
        <div className="w-2/5">
          <h2 className="text-5xl font-semibold text-gray-800">
            Empowering Lives Through Health
          </h2>
          <button className="mt-20 px-4 py-2 border rounded-2xl flex items-center space-x-2 bg-white cursor-pointer hover:bg-[#D7EFFF] hover:scale-105 transition duration-300 ease-in-out">
            Get an appointment
          </button>
        </div>

        {/* Buttons Grid with Hover Effect */}
        <div className="grid grid-cols-2 gap-4 w-3/5">
          {buttons.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="glowing-button bg-white p-10 rounded-xl text-3xl font-semibold cursor-pointer transition duration-300 ease-in-out"
            >
              {hoverIndex === index ? (
                <span className="text-lg font-medium">{item.hoverText}</span>
              ) : (
                <span>{item.label}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Consulting Section */}
      <div className="mt-32"></div>
      <Consulting />

      {/* Services Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-center">Our Services</h2>
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-200 p-12 rounded-xl text-center text-black shadow-sm">
            <span className="text-xl py-5">
              Personalized treatment plans & proactive alerts.
            </span>
          </div>
          <div className="bg-blue-100 p-12 rounded-xl text-center shadow-sm text-black">
            <span className="text-xl py-5">
              Provide real-time access to medical records.
            </span>
          </div>
          <div className="bg-gray-200 p-12 rounded-xl text-center shadow-sm text-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Jeevanya;
