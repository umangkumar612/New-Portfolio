import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/portfolioData';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <h2>{profile.name}</h2>
            <p>{profile.role}</p>
          </div>
          <div className="footer-socials">
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={18} aria-hidden="true" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} aria-hidden="true" />
            </a>
            {profile.instagram && (
                <a href={profile.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={18} aria-hidden="true" />
                </a>
            )}
          </div>
          <p className="copyright">© {currentYear} {profile.name}. All rights reserved.</p>
        </div>
      </footer>
  );
}

export default Footer;