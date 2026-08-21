import { ExternalLink, Github } from 'lucide-react';
import useCardTilt from '../../hooks/useCardTilt';
import './ProjectCard.css';

function ProjectVisual({ type }) {
  return (
    <div className={`project-visual project-visual-${type}`} aria-hidden="true">
      <div className="visual-topline" />
      <div className="visual-layout">
        <span />
        <span />
        <span />
      </div>
      <div className="visual-panel">
        <span />
        <span />
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const tiltHandlers = useCardTilt();

  return (
    <article className="project-card depth-card" {...tiltHandlers} data-reveal>
      <ProjectVisual type={project.visual} />
      <div className="project-card-content">
        <p className="project-type">{project.type}</p>
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="button-row project-actions">
          <a className="button button-primary" href={project.liveUrl} aria-label={`View ${project.name}`}>
            <ExternalLink size={16} aria-hidden="true" />
            View Project
          </a>
          {project.githubUrl && (
            <a className="button button-ghost" href={project.githubUrl} aria-label={`${project.name} GitHub`}>
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
