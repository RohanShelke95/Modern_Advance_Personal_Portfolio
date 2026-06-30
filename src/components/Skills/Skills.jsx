import { skillGroups } from "../../data/skills";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills reveal-section" id="skills">
      <div className="skills-head">
        <p className="eyebrow">Technical stack</p>
        <h2 className="section-title">
          Skills <span>Menu</span>
        </h2>
      </div>

      <div className="skills-menu">
        {skillGroups.map((g, i) => (
          <div className="skill-row" key={g.title}>
            <button type="button" className="skill-row-btn">
              <span>{g.title}</span>
              <small>0{i + 1}</small>
            </button>

            <div className="skill-marquee">
              <div className="skill-track">
                {[...g.items, ...g.items, ...g.items].map((it, k) => {
  const Icon = it.icon;

  return (
    <b key={k}>
      <Icon />
      <span>{it.name}</span>
    </b>
  );
})}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}