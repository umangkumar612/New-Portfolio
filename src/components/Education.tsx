import { education } from '@/data/portfolio';
import '@/styles/education.css';

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <p className="eyebrow reveal">Education</p>
        <h2 className="section-title reveal">
          Academic <span className="text-accent">foundation.</span>
        </h2>

        <div className="education__list" data-stagger>
          {education.map((e, i) => (
            <article className="education__item reveal" data-stagger-item key={i}>
              <div className="education__head">
                <div>
                  <h3 className="education__institution">{e.institution}</h3>
                  <p className="education__degree">{e.degree}</p>
                </div>
                <span className="education__period">{e.period}</span>
              </div>
              <span className="education__detail">{e.detail}</span>
              {e.coursework.length > 0 && (
                <div className="education__coursework">
                  {e.coursework.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
