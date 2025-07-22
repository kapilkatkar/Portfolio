import Headers from "../Header/Header";
import Footer from "../Footer/Footer";
import "./About.css";
import PP from "../../assets/PP2.jpg";

const About = ({
  imageSrc = PP,
  name = "Kapil Katkar",
  email = "katkarkapil32@gmail.com",
  company = "Infosys",
  experience = "4 years",
  location = "Nagpur, MH, India",
  aboutMe = [
    "Hi, I'm Kapil Katkar - a front-end developer passionate about building for the web and constantly learning.",
    "I've been developing responsive, performant web applications for over 3.8 years, working with technologies like React, Redux, and Tailwind CSS. My focus is on clean, accessible UI, seamless API integration, and delivering great user experiences.",
    "Right now, I'm exploring the potential of Generative AI to create innovative, real-world solutions. I'm especially interested in how modern front-end tools and AI can come together to empower users and streamline development.",
  ],
}) => (
  <>
    <Headers />
    <main className="about-container">
      <h2>About Me</h2>
      <article className="about-card">
        <div className="left-side">
          <img src={imageSrc} alt={name} className="profile-image" />
          <div className="name">{name}</div>
          <div className="email"></div>
          <a href="mailto:katkarkapil32@gamil.com" className="email-link">
            {email}
          </a>
          <div className="company-info email-link">
            {company} | {experience}
          </div>
          <div className="location email-link">{location}</div>
        </div>
        <div className="right-side">
          <div className="about-me">
            <ul>
              {aboutMe.map((paragraph, idx) => (
                <li key={idx}>{paragraph}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default About;
