import { GraduationCap } from 'lucide-react';
import { education } from '../../data/portfolioData';
import './Education.css';

function Education() {
  return (
    <section className="site-section education-section" id="education" aria-labelledby="education-title">
      <div className="section-shell education-grid" data-reveal>
        <div>
          <span className="section-kicker">Education</span>
          <h2 className="section-title" id="education-title">
            Academic foundation in computer science.
          </h2>
        </div>

        <article className="education-card">
          <GraduationCap size={34} aria-hidden="true" />
          <p>{education.period}</p>
          <h3>{education.degree}</h3>
          <strong>{education.university}</strong>
          <span>CGPA: {education.cgpa}</span>
          <div className="education-tags">
            {education.relevantAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default Education;
