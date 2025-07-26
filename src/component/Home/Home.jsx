import "./Home.css";
import Headers from "../Header/Header";
import { Link } from "react-router-dom";
import CircularAnimation from "../circularAnimation";
import bearImage from "../../assets/bear.png";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";

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
            I’m constantly learning and evolving - currently diving deeper into
            React performance, testing strategies, animation libraries, and
            exploring the exciting field of Generative AI development.
          </p>
        </section>
        <Skills></Skills>
        <section id="aspiration" className="aspiration-section">
          <h2>Aspiration</h2>
          <p className="aspiration-intro">
            As a passionate Front-End Developer, here’s what I’m aiming for:
          </p>
          <ul className="aspiration-list">
            <li> Build high-performance, accessible, and scalable web apps.</li>
            <li>
              Dive deeper into React architecture, performance, and testing.
            </li>
            <li>
              Craft intuitive user experiences with elegant, clean design.
            </li>
            <li>
              Collaborate on impactful projects with like-minded developers.
            </li>
            <li> Explore animation, micro-interactions, and design systems.</li>
            <li>
              Leverage Generative AI to enhance web interactions intelligently.
            </li>
            <li>
              Continuously grow toward becoming a&nbsp;
              <b>Senior Technology Architect</b> - leading front-end strategy,
              architecture, and innovation at scale.
            </li>
          </ul>
        </section>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Home;
