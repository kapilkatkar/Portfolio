import React from "react";
import Headers from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Projects.css";
import { FaLink } from "react-icons/fa";

const projects = [
  {
    position: "Full Stack Developer",
    title: "InfyMeNavi",
    company: "Infosys",
    desc: [
      "Built a scalable React-based chatbot UI integrated with REST APIs and backend LLMs to automate employee queries, improving response time by 30%.",
      "Implemented Redux for state management and optimized component rendering for better performance across 80K+ monthly users.",
      "Enhanced app stability and user experience through accessibility improvements, feedback-driven design changes, and UI consistency.",
    ],
    tech: ["React", "CSS", "Vite", "Python", "LangGraph"],
  },
  {
    position: "React Developer",
    title: "Candidate LCA",
    company: "Infosys",
    desc: [
      "Developed a responsive web app using React, Redux Toolkit, and JavaScript (ES6+) to manage visa-related workflows and documentation.",
      "Integrated third-party APIs for real-time updates, and built form validation flows with error handling for seamless user experience.",
      "Refactored legacy UI components into reusable ones, improving code reusability and reducing bugs across modules.",
    ],
    tech: ["React", "Firebase", "TailwindCSS", "Kafka", "SpringBoot"],
  },
  {
    position: "System Engineer",
    title: "Initiated Assignment",
    company: "Infosys",
    desc: [
      "Created an internal portal with React and React Router, allowing efficient submission, assignment tracking, and approval workflows.",
      "Implemented unit testing with Jest and React Testing Library, ensuring 90% code coverage and robust production releases.",
      "Collaborated with backend and QA teams in an Agile setup to ensure timely delivery and UI consistency across all platforms.",
    ],
    tech: ["Angular", "Dot net", "SQL"],
  },
  {
    position: "Front End Engineer",
    title: "E-commerce Shopping App",
    company: "Personal Project",
    desc: [
      "Developed a fully responsive e-commerce UI using React, Redux, and React Router, implementing product listings, cart logic, and item quantity updates.",
      "Integrated with a mock REST API for real-time product simulation and applied component-based architecture to improve modularity.",
      "Focused on responsive design, cross-browser compatibility, and smooth client-side navigation to mimic a real-world shopping experience.",
    ],
    tech: ["React", "CSS", "React router"],
    link: "https://rowdyyshopapp.netlify.app",
  },
  {
    position: "Senior React Developer",
    title: "Portfolio",
    company: "Personal Project",
    desc: [
      "Built a responsive portfolio website using React with smooth navigation.",
      "Implemented dark/light mode toggle for better user experience.",
      "Added smooth fade-in and slide-up animations to enhance user experience.",
    ],
    tech: ["React", "CSS", "React router"],
  },
];

const Project = () => (
  <>
    <Headers />
    <main className="project-container">
      <h2>My Projects</h2>
      {projects.map(({ title, position, desc, tech, company, link }, index) => (
        <article className="project-card" key={index}>
          <h3>
            {title}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "0.5rem", color: "var(--primary-color)" }}
              >
                <FaLink title="HTML5" />
              </a>
            )}
          </h3>

          <li style={{ listStyle: "none" }}>{company}</li>
          <p>
            <strong>Role:</strong> {position}
          </p>
          <ul>
            {desc.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div className="project-tech">
            {tech.map((technology, idx) => (
              <span className="tech-tag" key={idx}>
                {technology}
              </span>
            ))}
          </div>
        </article>
      ))}
    </main>
    <Footer />
  </>
);

export default Project;
