import { approachSteps } from '../../data/portfolioData';
import './ProjectApproach.css';

function ProjectApproach() {
  return (
    <section className="site-section approach-section" id="approach" aria-labelledby="approach-title">
      <div className="section-shell" data-reveal>
        <span className="section-kicker">Process</span>
        <h2 className="section-title" id="approach-title">
          How I Approach a Project
        </h2>
        <p className="section-lede">
          A practical flow for moving from requirements to a maintainable implementation.
        </p>

        <div className="approach-grid">
          {approachSteps.map((step, index) => (
            <article className="approach-step depth-card" key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectApproach;
