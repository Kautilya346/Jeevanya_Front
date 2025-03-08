import React, { useState } from "react";

const SupportGroupCard = ({ name, description }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <button className="join-button">Join Group</button>
    </div>
  );
};

const Forum = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const supportGroups = [
    {
      name: "Cancer Support",
      description: "Connecting cancer patients and survivors",
    },
    {
      name: "HIV/AIDS Community",
      description: "Support network for HIV/AIDS patients",
    },
    { name: "Diabetes Warriors", description: "Managing diabetes together" },
    {
      name: "Mental Health Matters",
      description: "Safe space for mental health discussions",
    },
    {
      name: "Heart Health",
      description: "Support group for cardiovascular patients",
    },
    {
      name: "Autoimmune Disorders",
      description: "Community for autoimmune condition support",
    },
    { name: "Rare Diseases", description: "Network for rare disease patients" },
    {
      name: "Chronic Pain Support",
      description: "Managing chronic pain collectively",
    },
  ];

  const filteredGroups = supportGroups.filter((group) =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="forum-container">
      <header>
        <h1>Find Your Support Community</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a support group..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg className="search-icon" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>
      </header>

      <div className="groups-grid">
        {filteredGroups.length === 0 ? (
          <div className="no-results">
            <p>No support groups found matching your search.</p>
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

      <style jsx>{`
        .forum-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }

        header {
          text-align: center;
          margin-bottom: 3rem;
        }

        h1 {
          color: #2c3e50;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .search-container {
          position: relative;
          max-width: 600px;
          margin: 0 auto;
        }

        input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: 2px solid #e0e0e0;
          border-radius: 30px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        input:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          height: 1.5rem;
          width: 1.5rem;
          fill: #95a5a6;
        }

        .groups-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          padding: 1rem;
        }

        .card {
          background: white;
          border-radius: 15px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 200px;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
        }

        .card-content h3 {
          color: #2c3e50;
          margin-bottom: 0.75rem;
          font-size: 1.3rem;
        }

        .card-content p {
          color: #7f8c8d;
          line-height: 1.6;
        }

        .join-button {
          align-self: flex-start;
          background: #3498db;
          color: white;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 20px;
          cursor: pointer;
          transition: background 0.3s ease;
          margin-top: 1rem;
        }

        .join-button:hover {
          background: #2980b9;
        }

        .no-results {
          text-align: center;
          grid-column: 1 / -1;
          padding: 2rem;
          color: #95a5a6;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          .groups-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Forum;
