import { useEffect, useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { navLinks, profile } from '../../data/portfolioData';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(`#${visible.target.id}`);
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0.1, 0.3, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="navbar-inner">
        <a className="brand" href="#home" onClick={handleNavClick} aria-label="Umang Kumar home">
          <span className="brand-mark">UK</span>
          <span>{profile.name}</span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`} aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href ? 'active' : ''}
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
          <a className="resume-link mobile-resume" href={profile.resumeUrl} onClick={handleNavClick}>
            <FileText size={16} aria-hidden="true" />
            Resume
          </a>
        </nav>

        <a className="resume-link desktop-resume" href={profile.resumeUrl}>
          <FileText size={16} aria-hidden="true" />
          Resume
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
