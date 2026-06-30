import { FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h2>ROHAN SHELKE</h2>
          <p>
            Full Stack Developer • UI/UX Designer • DevOps Learner
          </p>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/RohanShelke95"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>

          <a
            href="https://linkedin.com/in/rohan-shelke-9136b8317/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>

          <a href="#home">
            <FiArrowUpRight />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Rohan Shelke. All rights reserved.</span>

        <a href="#home">Back to Top ↑</a>
      </div>
    </footer>
  );
}