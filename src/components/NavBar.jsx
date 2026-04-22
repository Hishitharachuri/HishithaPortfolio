import { NavLink } from "react-router-dom";
import "../App.css";

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-user">Hishitha's Portfolio</li>

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