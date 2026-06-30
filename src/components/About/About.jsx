import { motion } from "framer-motion";
import "./About.css";

const stats = [
  ["1+", "Years Learning & Building"],
  ["5+", "Projects Completed"],
  ["3", "Core Tracks: Web UI DevOps"],
];

export default function About() {
  return (
    <section className="about reveal-section" id="about">
      <div className="orb">
        <span />
        <span />
        <span />
      </div>

      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="eyebrow">About me</p>
          <h2 className="section-title">
            About <span>Me</span>
          </h2>

          <p className="about-text"> 
            I am a Full Stack Developer, UI/UX Designer and Frontend Developer 
            focused on building clean, responsive and production-ready digital
            products.
          </p>

          <p className="about-text">
            I work with React.js, Node.js, Express, MongoDB, REST APIs,
            Tailwind/CSS and modern deployment workflows. My goal is simple:
            build interfaces that look premium, feel smooth and solve real
            problems.
          </p>
        </div>

        <div className="stats">
          {stats.map((s, i) => (
            <div className="stat glass" key={i}>
              <strong>{s[0]}</strong>
              <span>{s[1]}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="education glass"
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.15,
        }}
      >
        <div>
          <small>Education</small>
          <h3>Bachelor of Computer Science (BCS)</h3>
          <p>
            Graduated in Computer Science with a strong foundation in software
            engineering, object-oriented programming, databases, web
            development, data structures, algorithms, and modern application
            development.
          </p>
        </div>

        <b>CS</b>
      </motion.div>
    </section>
  );
}