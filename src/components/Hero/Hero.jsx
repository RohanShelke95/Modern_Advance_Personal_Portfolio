import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import "./Hero.css";

const roles = [
  { top: "SOFTWARE", bottom: "ENGINEER" }, 
  {top: "FULL STACK", bottom: "DEVELOPER" },
  { top: "JAVA", bottom: "DEVELOPER" },
  { top: "BACKEND", bottom: "DEVELOPER" },
  { top: "REACT", bottom: "DEVELOPER" },
 

];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const fullText = `${current.top}|${current.bottom}`;
    const speed = deleting ? 45 : 85;

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < fullText.length) {
        const next = fullText.slice(0, charIndex + 1);
        const [top, bottom = ""] = next.split("|");
        setTopText(top);
        setBottomText(bottom);
        setCharIndex(charIndex + 1);
      } else if (!deleting && charIndex === fullText.length) {
        setTimeout(() => setDeleting(true), 900);
      } else if (deleting && charIndex > 0) {
        const next = fullText.slice(0, charIndex - 1);
        const [top, bottom = ""] = next.split("|");
        setTopText(top);
        setBottomText(bottom);
        setCharIndex(charIndex - 1);
      } else {
        setDeleting(false);
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="side-social">
        <a href="https://github.com/RohanShelke95" target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/rohan-shelke-9136b8317/" target="_blank" rel="noreferrer">
          <FiLinkedin />
        </a>
      </div>

      <a className="side-email" href="mailto:shelkerohan555@gmail.com">
        shelkerohan555@gmail.com
      </a>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="status">
          <i />
          Available for work
        </span>

        <h1 className="hero-title typing-title">
          <span className="top-role">{topText}</span>
          <b className="bottom-role">
            {bottomText}
            <em className="typing-cursor">|</em>
          </b>
        </h1>

        <h2> Full Stack Developer</h2>  

        <p>
          Building scalable, modern, and user-focused web applications with
          React.js, Node.js, MongoDB, UI/UX principles and DevOps mindset.
        </p>

        <div className="hero-actions">
          <a href="/Rohan_Resume.pdf" download className="btn cv-btn">
            <span>Download Resume</span>
          </a>

          <a className="btn ghost" href="#projects">
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
}