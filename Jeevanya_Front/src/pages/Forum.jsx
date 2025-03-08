import React, { useState } from "react";

// Card component for displaying support groups
const SupportGroupCard = ({ name, description }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

const Forum = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample support groups data
  const supportGroups = [
    { name: "Cancer", description: "Support group for cancer patients." },
    { name: "AIDS", description: "Support group for AIDS patients." },
    { name: "Diabetes", description: "Support group for diabetes patients." },
    {
      name: "Mental Health",
      description: "Support group for mental health issues.",
    },
    {
      name: "Heart Disease",
      description: "Support group for heart disease patients.",
    },
  ];

  // Filter support groups based on search query
  const filteredGroups = supportGroups.filter((group) =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Forum</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for a disease..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="support-groups">
        {/* Render filtered support groups */}
        {filteredGroups.length === 0 ? (
          <p>No support groups found.</p>
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
