import { useRef } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import '@/styles/projects.css';

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--rx', `${y * -6}deg`);
    el.style.setProperty('--ry', `${x * 6}deg`);
    el.style.setProperty('--mx', `${(x + 0.5) * 100}%`);
    el.style.setProperty('--my', `${(y + 0.5) * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <a
      ref={ref}
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card project-card--featured reveal ${index % 2 ? 'alt' : ''}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      data-cursor-hover
    >
      <div className="project-card__visual">
        <div className="project-card__visual-grid" />
        <div className="project-card__visual-glow" />
        <span className="project-card__number">{project.number}</span>
      </div>

      <div className="project-card__body">
        <span className="project-card__category">{project.category}</span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        {project.metrics.length > 0 && (
          <div className="project-card__metrics">
            {project.metrics.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        )}

        {project.highlights && (
          <ul className="project-card__highlights">
            {project.highlights.slice(0, 6).map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        <div className="project-card__tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div className="project-card__actions">
          <span className="project-card__live">
            View Live <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </a>
  );
}

function SmallCard({ project }: { project: Project }) {
  return (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card project-card--small reveal"
      data-cursor-hover
    >
      <div className="project-card__small-visual">
        <span className="project-card__number">{project.number}</span>
        <ExternalLink size={18} className="project-card__small-icon" />
      </div>
      <div className="project-card__small-body">
        <span className="project-card__category">{project.category}</span>
        <h3 className="project-card__small-title">{project.title}</h3>
        <p className="project-card__small-desc">{project.description}</p>
        <div className="project-card__tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <p className="eyebrow reveal">Selected Work</p>
        <h2 className="section-title reveal">
          Case studies, not just <span className="text-accent">cards.</span>
        </h2>
      </div>

      <div className="container projects__featured">
        {featured.map((p, i) => (
          <FeaturedCard key={p.id} project={p} index={i} />
        ))}
      </div>

      <div className="container">
        <h3 className="projects__subhead reveal">Other Projects</h3>
        <div className="projects__others">
          {others.map((p) => (
            <SmallCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
