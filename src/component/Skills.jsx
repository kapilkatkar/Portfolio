import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiJirasoftware,
  SiVite,
  SiWebpack,
  SiAngular,
  SiStyledcomponents,
  SiNpm,
  SiSass,
  SiLangchain,
  SiGithub,
} from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>Core Front-End</h3>
          <div className="skill-icons">
            <FaHtml5 title="HTML5" style={{ color: "#e34c26" }} />
            <FaCss3Alt title="CSS3" style={{ color: "#1572B6" }} />
            <FaJs title="JavaScript" style={{ color: "#f7df1e" }} />
            <SiTypescript title="TypeScript" style={{ color: "#3178c6" }} />
          </div>
          <p>HTML5, CSS3, JavaScript (ES6+), TypeScript</p>
        </div>

        <div className="skill-card">
          <h3>Frameworks</h3>
          <div className="skill-icons">
            <FaReact title="React" style={{ color: "#61DBFB" }} />
            <SiVite title="Vite" style={{ color: "#646CFF" }} />
            <SiAngular title="Angular" style={{ color: "#dd0031" }} />
          </div>
          <p>React, Vite, Angular</p>
        </div>

        <div className="skill-card">
          <h3>Styling Tools</h3>
          <div className="skill-icons">
            <SiTailwindcss title="Tailwind CSS" style={{ color: "#38BDF8" }} />
            <SiSass title="SASS" style={{ color: "#CD6799" }} />
            <SiStyledcomponents
              title="Styled-components"
              style={{ color: "#db7093" }}
            />
          </div>
          <p>Tailwind CSS, SASS/SCSS, Styled-components</p>
        </div>

        <div className="skill-card">
          <h3>State Management</h3>
          <div className="skill-icons">
            <SiRedux title="Redux Toolkit" style={{ color: "#764ABC" }} />
            <FaReact title="Context API" style={{ color: "#61DBFB" }} />
          </div>
          <p>Redux Toolkit, Context API</p>
        </div>

        <div className="skill-card">
          <h3>Tools & Workflow</h3>
          <div className="skill-icons">
            <FaGitAlt title="Git" style={{ color: "#F1502F" }} />
            <SiGithub title="GitHub" style={{ color: "#181717" }} />
            <SiWebpack title="Webpack" style={{ color: "#8ED6FB" }} />
            <SiNpm title="npm" style={{ color: "#CB3837" }} />
            <SiJirasoftware title="JIRA" style={{ color: "#0052CC" }} />
          </div>
          <p>Git, GitHub, Webpack, npm, Agile, JIRA, CI/CD</p>
        </div>

        <div className="skill-card">
          <h3>Gen AI</h3>
          <div className="skill-icons">
            <SiLangchain title="LangChain" style={{ color: "#FF6B00" }} />
            <FaReact title="CrewAI" style={{ color: "#61DBFB" }} />
            <FaReact title="GPT" style={{ color: "#10a37f" }} />
          </div>
          <p>LangChain, LangGraph, CrewAI, GPT models, RAG</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
