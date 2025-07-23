import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { IoMoonSharp } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

const Headers = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

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
          <Link to="/Skills">Skills</Link>
        </li>
        <li>
          <Link to="/ChatBot">Kapil-bot</Link>
        </li>
      </ul>
      <ul className="right-links">
        <li
          onClick={toggleTheme}
          style={{ cursor: "pointer", fontSize: "1.5rem" }}
        >
          {isDark ? <MdOutlineWbSunny /> : <IoMoonSharp />}
        </li>
        <li>
          <a href="/Kapil_React_Resume.pdf" download className="resume-button">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Headers;
