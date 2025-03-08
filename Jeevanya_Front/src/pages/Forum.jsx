import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SupportGroupCard = ({ name, description }) => {
  const navigate = useNavigate();

  const handleJoinGroup = () => {
    navigate("/community", { state: { communityName: name } });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between min-h-[220px] transition-transform transform hover:-translate-y-2 hover:shadow-xl">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{name}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
      <button
        onClick={handleJoinGroup}
        className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Join Group
      </button>
    </div>
  );
};

const Forum = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const supportGroups = [
    {
      name: "Cancer",
      description: "Connecting cancer patients and survivors",
    },
    {
      name: "AIDS",
      description: "Support network for AIDS patients",
    },
    { name: "Diabetes", description: "Managing diabetes together" },
    {
      name: "MentalHealth",
      description: "Safe space for mental health discussions",
    },
    {
      name: "HeartHealth",
      description: "Support group for cardiovascular patients",
    },
    {
      name: "AutoimmuneDisease",
      description: "Community for autoimmune condition support",
    },
  ];

  const filteredGroups = supportGroups.filter((group) =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Find Your Support Community
        </h1>
        <div className="mt-6 flex justify-center relative max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search for a support group..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 pl-12 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 text-lg"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-7 h-7 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-1.48 1.48l.27.28v.79l4.25 4.25a1.06 1.06 0 0 0 1.49-1.49L15.5 14zm-6 0A4.5 4.5 0 1 1 14 9.5a4.5 4.5 0 0 1-4.5 4.5z" />
          </svg>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGroups.length === 0 ? (
          <div className="text-center col-span-full text-gray-500 text-lg font-medium">
            No support groups found matching your search.
          </div>
        ) : (
          filteredGroups.map((group) => (
            <SupportGroupCard
              key={group.name}
              name={group.name}
              description={group.description}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Forum;
