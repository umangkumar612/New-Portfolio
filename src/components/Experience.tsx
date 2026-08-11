import { experience, metrics } from '@/data/portfolio';
import '@/styles/experience.css';

export default function Experience() {
  const exp = experience[0];

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <p className="eyebrow reveal">Experience</p>
        <h2 className="section-title reveal">
          Where I've been <span className="text-accent">building.</span>
        </h2>

        <div className="experience__timeline">
          <div className="experience__line reveal" />

          <div className="experience__entry reveal">
            <div className="experience__marker" />

            <div className="experience__head">
              <div>
                <h3 className="experience__role">{exp.role}</h3>
                <p className="experience__company">{exp.company}</p>
              </div>
              <span className="experience__period">{exp.period}</span>
            </div>

            <div className="experience__metrics">
              {metrics.map((m) => (
                <div className="experience__metric" key={m.label}>
                  <span className="experience__metric-value">{m.value}</span>
                  <span className="experience__metric-label">{m.label}</span>
                </div>
              ))}
            </div>

            <ul className="experience__list" data-stagger>
              {exp.highlights.map((h) => (
                <li key={h} data-stagger-item>
                  <span className="experience__bullet" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
