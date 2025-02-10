// Sidebar.jsx
import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sidebar-container">
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <ul className="sidebar-menu">
          <li
            className={selected === "current" ? "active" : ""}
            onClick={() => onSelect("current")}
          >
            Current Orders
          </li>
          <li
            className={selected === "upcoming" ? "active" : ""}
            onClick={() => onSelect("upcoming")}
          >
            Upcoming Orders
          </li>
          <li
            className={selected === "history" ? "active" : ""}
            onClick={() => onSelect("history")}
          >
            History
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
