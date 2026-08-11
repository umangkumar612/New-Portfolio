import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personal } from '@/data/portfolio';
import '@/styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <a href="#top" className="footer__brand">
            <span className="footer__mark">UK</span>
            <span>{personal.name}</span>
          </a>
          <a href="#top" className="footer__back" aria-label="Back to top">
            Back to top <ArrowUp size={15} />
          </a>
        </div>
        <div className="footer__bottom">
          <span>© 2026 {personal.name}</span>
          <span>Designed & built with React + WebGL</span>
          <div className="footer__socials">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href={`mailto:${personal.email}`} aria-label="Email"><Mail size={17} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
