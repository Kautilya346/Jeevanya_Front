import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import Consulting from "../Components/Consulting";
import bgi from "../assests/bgi.png";
import { FaRobot, FaFileAlt, FaUsers } from "react-icons/fa";

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
    {
      label: "Medical Records",
      hoverText: "Upload your medical records ",
      path: "/uploadmedicalrecord",
    },
    {
      label: "Report Page",
      hoverText: "See Your Report Page",
      path: "/reportpage",
    },
  ];

  const services = [
    {
      title: "AI-Powered Diagnostics",
      description:
        "Our AI-powered diagnostic tool allows users to input their current symptoms along with their previous medical records. By analyzing this data, the AI generates logical and data-driven insights to help users understand potential health conditions.",
      icon: <FaRobot className="text-4xl" />,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Medical Records Access",
      description:
        "Patients have full access to their previous medical records and complete diagnostic history, empowering them to make informed decisions about their health.",
      icon: <FaFileAlt className="text-4xl" />,
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      title: "Support Communities",
      description:
        "Our support group provides a safe and welcoming space for individuals facing similar health challenges and conditions to connect with one another.",
      icon: <FaUsers className="text-4xl" />,
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
    },
  ];

  return (
    <div
      style={{ fontFamily: "Barlow, sans-serif" }}
      className="min-h-screen bg-gradient-to-br from-[#E1F5FE] via-[#D4F1F4] to-[#FFFFFF] p-6"
    >
      {/* Navbar */}

      {/* Hero Section */}
      <div className="relative bg-cover bg-center rounded-4xl p-10 mt-10 shadow-md flex justify-between overflow-hidden border-2 border-[#C8C8C8]">
        <img
          src={bgi}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-8"
        />

        <div className="w-2/5 z-10">
          <h2 className="text-5xl font-semibold text-gray-800">
            Empowering Lives Through Health
          </h2>
          <p className="mt-12 mr-12 text-xl">
            A patient-focused digital platform that connects with hospital
            systems, allowing real-time access to medical records, customized
            treatment plans, proactive health alerts, and easy communication
            between patients, doctors, and caregivers. This platform aims to
            boost patient involvement and enhance the overall healthcare
            experience during major hospital changes.
          </p>
        </div>

        {/* Buttons Grid with Hover Effect */}
        <div className="grid grid-cols-2 gap-4 w-3/5 z-10">
          {buttons.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="glowing-button bg-white p-10 rounded-xl text-3xl font-semibold cursor-pointer transition duration-800 ease-in-out"
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

      {/* Enhanced Services Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-3">
          Our Services
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Comprehensive healthcare solutions designed to empower you on your
          wellness journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100`}
            >
              <div className="flex justify-center mb-6">
                <div
                  className={`p-4 rounded-full ${service.iconColor} bg-white shadow-sm`}
                >
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-700 font-barlow leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6">
                <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center justify-center mx-auto"></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jeevanya;
