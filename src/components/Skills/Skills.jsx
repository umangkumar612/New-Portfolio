import { skillGroups } from '../../data/portfolioData';
import useCardTilt from '../../hooks/useCardTilt';
import './Skills.css';

function Skills() {
  const tiltHandlers = useCardTilt();

  return (
    <section className="site-section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-shell" data-reveal>
        <span className="section-kicker">Skills</span>
        <h2 className="section-title" id="skills-title">
          Practical tools for full stack product development.
        </h2>
        <p className="section-lede">
          A focused stack for building responsive interfaces, backend integrations, and structured
          project systems.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card depth-card" key={group.title} {...tiltHandlers}>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
