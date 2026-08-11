import { personal, metrics } from '@/data/portfolio';
import '@/styles/about.css';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <p className="eyebrow reveal">About</p>

        <div className="about__grid">
          <div className="about__left">
            <h2 className="about__statement reveal">
              I build <span className="text-accent">scalable systems</span> and
              interfaces that hold up under real load.
            </h2>
          </div>

          <div className="about__right">
            <p className="about__desc reveal">{personal.about}</p>

            <div className="about__metrics" data-stagger>
              {metrics.map((m) => (
                <div className="about__metric" data-stagger-item key={m.label}>
                  <span className="about__metric-value">{m.value}</span>
                  <span className="about__metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
