import { BriefcaseBusiness } from 'lucide-react';
import { experiences } from '../../data/portfolioData';
import useCardTilt from '../../hooks/useCardTilt';
import './Experience.css';

function Experience() {
  const tiltHandlers = useCardTilt();

  return (
      <section className="site-section experience-section" id="experience" aria-labelledby="experience-title">
        <div className="section-shell" data-reveal>
          <span className="section-kicker">Experience</span>
          <h2 className="section-title" id="experience-title">
            Real Project Exposure & Architecture-Focused Learning
          </h2>

          <div className="timeline">
            {experiences.map((item) => (
                <article className="experience-card depth-card" key={`${item.company}-${item.role}`} {...tiltHandlers}>
                  <div className="experience-icon">
                    <BriefcaseBusiness size={22} aria-hidden="true" />
                  </div>

                  <div className="experience-content">
                    <p className="experience-company">{item.company}</p>
                    {item.period && <p className="experience-period">{item.period}</p>}
                    <h3 className="experience-role">{item.role}</h3>

                    <ul className="experience-points">
                      {item.points.map((point, index) => (
                          <li key={`${item.company}-${index}`}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
            ))}
          </div>
        </div>
      </section>
  );
}

export default Experience;
