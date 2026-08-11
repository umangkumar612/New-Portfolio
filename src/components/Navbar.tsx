import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, personal } from '@/data/portfolio';
import '@/styles/navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a
          href="#top"
          className="nav__brand"
          onClick={(e) => handleClick(e, '#top')}
        >
          <span className="nav__brand-mark">UK</span>
          <span className="nav__brand-name">{personal.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${personal.email}`}
          className="nav__cta"
        >
          Let's Talk
        </a>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
          <a href={`mailto:${personal.email}`} className="nav__mobile-cta">
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}
