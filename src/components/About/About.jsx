import { CheckCircle2 } from 'lucide-react';
import './About.css';

const strengths = [
  'Requirement-first development mindset',
  'Frontend architecture planning',
  'Database/table structure thinking',
  'Multiple user types and access levels',
  'Clean, structured, maintainable code',
];

function About() {
  return (
    <section className="site-section about-section" id="about" aria-labelledby="about-title">
      <div className="section-shell about-grid" data-reveal>
        <div>
          <span className="section-kicker">About</span>
          <h2 className="section-title" id="about-title">
            Building with structure before writing the first feature.
          </h2>
        </div>

        <div className="about-content">
          <p>
            I am Umang Kumar, a B.Tech Computer Science and Engineering student interested in Full
            Stack Development. I have experience working on real-world projects where understanding
            requirements, user types, permissions, modules, and access levels is an important part of
            development.
          </p>
          <p>
            My focus is on planning frontend architecture and database/table structure before
            implementation, then writing clean and organized code that is easier to maintain. I keep
            learning through practical work and aim to improve with every project.
          </p>

          <div className="strength-list">
            {strengths.map((item) => (
              <div className="strength-item" key={item}>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
