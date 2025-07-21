import React, { useEffect, useRef, useState } from "react";
import bearImage from "../../assets/bear3.png";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);
  const [footerVisible, setFooterVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const visible = footerVisible && scrollDirection === "down";

  return (
    <footer ref={footerRef} className="footer">
      <img
        src={bearImage}
        alt="Bear"
        className="bear-img-3"
        style={{
          transform: visible
            ? "translateY(0) rotate(-20deg)"
            : "translateY(-50%) rotate(-20deg)",
          opacity: visible ? 1 : 0,
        }}
      />

      <div className="footer-content">
        <div className="footer-left">
          <h4>Say hi before the bear goes back to hibernation!</h4>
          <p>Let’s connect - I promise I bite only code.</p>
          <a href="mailto:katkarkapil32@gamil.com" className="email-link">
            katkarkapil32@gamil.com
          </a>
        </div>

        <div className="footer-right">
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/kapil-katkar-61493814a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin style={{ marginRight: "8px" }} />
              LinkedIn
            </a>
            <a
              href="https://github.com/kapilkatkar"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub style={{ marginRight: "8px" }} />
              GitHub
            </a>
          </div>

          <a
            href="/Kapil_React_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--primary-color)" }}
          >
            View Resume
          </a>
          <a
            href="/Kapil_React_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--primary-color)" }}
          >
            Certification
          </a>
          <a href="#top">
            <FaArrowUp style={{ marginRight: "6px" }} />
            Back to Top
          </a>
          <p className="tech-stack">Built with React | Styled with CSS</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Kapil Katkar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
