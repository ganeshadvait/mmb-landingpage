import React from "react";
import { useLocation } from "react-router-dom";

const LPMenu = () => {
  const location = useLocation();  // To get the current page's path

  const currentPageLink = location.pathname;  // Get the current page's link

  const Menu = [
    { id: 1, name: "Home", link: "#" },
    { id: 2, name: "About", link: "#" },
    { id: 3, name: "Services", link: "#" },
    { id: 4, name: "Contact", link: "#" },
    // Add more menu items as needed
  ];

  return (
    <nav className="LPNav">
      <ul>
        {Menu.map((menuItem) => (
          <li key={menuItem.id} className={menuItem.link === currentPageLink ? "active" : ""}>
            <a href={menuItem.link}>{menuItem.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LPMenu;
