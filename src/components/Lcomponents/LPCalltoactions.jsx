import React, { useState } from "react";

const LPCtas = () => {
  const CTAs = ["Locations", "Get Quote"];  // CTA labels
  const locations = ["Hyderabad", "Bangalore", "Chennai", "Mumbai"]; // Locations for the dropdown

  const [activeDropdown, setActiveDropdown] = useState(false);  // State to control the dropdown

  const toggleDropdown = () => {
    setActiveDropdown(!activeDropdown);  // Toggle dropdown visibility
  };

  return (
    <>
      {CTAs.map((CTA, index) => (
        CTA === "Locations" ? (  // Conditionally render for "Locations"
          <div key={index} className="cta-dropdown">
            <button onClick={toggleDropdown}>Locations</button>
            {activeDropdown && (  // Show dropdown when activeDropdown is true
              <ul className="dropdown-menu">
                {locations.map((location, i) => (
                  <li key={i}>{location}</li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <button key={index} className="sb">{CTA}</button>  // Regular button for other CTAs
        )
      ))}
    </>
  );
};

export default LPCtas;
