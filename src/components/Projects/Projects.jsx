import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects reveal-section" id="projects">
     <div className="marquee">
  <div className="marquee-track">
    {[...Array(20)].map((_, i) => (
      <span key={i}>SELECTED WORKS — </span>
    ))}
  </div>
</div>
      {projects.map((p, i) => (
        <motion.article
          className="project-card glass"
          key={p.id}
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          
          <div className="project-top">
            <div className="project-id">
              <strong>{p.id}</strong>
              <div>
                <h3>{p.title}</h3>
                <p>{p.stack}</p>
              </div>
            </div>
            <a className="link" href={p.live} target="_blank">
              View Project
            </a>
          </div>

          <div className="project-body">
            <div className="mockup">
  <img
  src={p.image}
  alt={p.title}
  className="project-image"
  loading="lazy"
  decoding="async"
/>
</div>

            <p>{p.desc}</p>
          </div>
        </motion.article>
      ))}
      
    </section>
  );
}
