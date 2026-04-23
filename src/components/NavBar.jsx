import { useState } from "react";
import "../App.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left side: Portfolio name */}
      <span className="nav-user">Hishitha's Portfolio</span>

      {/* Hamburger toggle (only shows on mobile) */}
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Links (hidden on mobile until hamburger is clicked) */}
      <ul className={`nav-list ${isOpen ? "open" : ""}`}>
        <li><a href="#home" className="nav-link">Home</a></li>
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#skills" className="nav-link">Skills</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
