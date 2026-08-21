import { projects } from '../../data/portfolioData';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';

function Projects() {
  return (
    <section className="site-section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-shell">
        <span className="section-kicker">Featured Projects</span>
        <h2 className="section-title" id="projects-title" data-reveal>
          Projects shaped around users, modules, and maintainable structure.
        </h2>
        <p className="section-lede" data-reveal>
          The project data is centralized in one JavaScript file so details, links, and technologies
          can be updated quickly.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
