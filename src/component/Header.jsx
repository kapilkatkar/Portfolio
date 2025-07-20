import { Link } from "react-router-dom";
import "./Header.css";

const Headers = () => {
  return (
    <nav className="navbar">
      <div className="brand">Kapil Katkar</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="right-links">
        <li>Theme</li>
        <li>Resume</li>
      </ul>
    </nav>
  );
};

export default Headers;
