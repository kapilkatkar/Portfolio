import "./Home.css";
import Headers from "./Header";
import { Link } from "react-router-dom";
import CircularAnimation from "./circularAnimation";
import bearImage from "../assets/bear.png";
const Home = () => {
  return (
    <div>
      <Headers />
      <main className="home-main">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Hello, I'm Kapil Katkar</h1>
            <p>
              I'm a Front-End Developer crafting elegant and scalable interfaces
              with modern web technologies. Check out my work below!
            </p>
            <Link to="/projects" className="btn-primary">
              View Projects
            </Link>
          </div>
          <div className="hero-graphic">
            <section className="illustration" style={{ position: "relative" }}>
              <CircularAnimation />
              <img src={bearImage} alt="Bear" className="bear-img" />
            </section>
          </div>
        </section>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hi! I'm Kapil Katkar, a Front-End Developer who loves crafting
            interactive and user-friendly web experiences. I specialize in
            building responsive interfaces using React, JavaScript, and modern
            CSS frameworks like Tailwind.
          </p>
          <p>
            I enjoy turning complex problems into simple, elegant designs.
            Whether it's building a clean UI or optimizing performance, I always
            aim for scalable, accessible, and maintainable code.
          </p>
          <p>
            I'm constantly learning and improving — currently exploring deeper
            concepts in React performance, testing, and animation libraries.
            When I'm not coding, I enjoy exploring design trends, sharing tips
            with the dev community, and refining my portfolio.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
