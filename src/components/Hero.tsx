import { lazy, Suspense } from 'react';
import { ArrowUpRight, Download, MapPin } from 'lucide-react';
import { personal } from '@/data/portfolio';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import '@/styles/hero.css';

const HeroScene = lazy(() => import('@/three/HeroScene'));

export default function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="hero" id="top">
      <div className="hero__canvas">
        {!reduced && (
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        )}
        {reduced && (
          <div className="hero-static-glow" aria-hidden>
            <div className="hero-static-glow__core" />
          </div>
        )}
      </div>

      <div className="hero__overlay" aria-hidden />

      <div className="container hero__content">
        <div className="hero__photo-wrap reveal">
          <div className="hero__photo-ring">
            <img
              src="/assets/profile.jpg"
              alt="Umang Kumar — Full Stack Developer"
              className="hero__photo"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="hero__photo-placeholder">UK</div>
          </div>
        </div>

        <div className="hero__text">
          <p className="hero__eyebrow reveal">
            <span className="hero__status-dot" />
            Available for opportunities
          </p>

          <h1 className="hero__headline">
            <span className="reveal-line">
              <span>Building digital</span>
            </span>
            <span className="reveal-line">
              <span>
                experiences that <em>feel alive.</em>
              </span>
            </span>
          </h1>

          <p className="hero__subhead reveal">{personal.subheadline}</p>

          <div className="hero__meta reveal">
            <span className="hero__name">{personal.name}</span>
            <span className="hero__dot" />
            <span>{personal.title}</span>
            <span className="hero__dot" />
            <span className="hero__loc">
              <MapPin size={13} /> {personal.location}
            </span>
          </div>

          <div className="hero__cta reveal">
            <a href="#projects" className="btn btn-primary magnetic">
              Explore My Work <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="btn btn-ghost magnetic">
              Let's Talk
            </a>
            <a
              href="/assets/Umang-Kumar-Resume.pdf"
              download
              className="btn btn-ghost magnetic"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about">
        <span>Scroll</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}
