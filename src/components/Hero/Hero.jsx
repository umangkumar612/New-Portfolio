import { Suspense, lazy, useEffect, useState } from 'react';
import { ArrowRight, Code2, Database, Layers3, ShieldCheck } from 'lucide-react';
import './Hero.css';

const HeroScene = lazy(() => import('./HeroScene'));

function Hero() {
  const [shouldRender3D, setShouldRender3D] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 721px)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateScenePreference = () => {
      setShouldRender3D(mediaQuery.matches && !reducedMotionQuery.matches);
    };

    updateScenePreference();
    mediaQuery.addEventListener('change', updateScenePreference);
    reducedMotionQuery.addEventListener('change', updateScenePreference);

    return () => {
      mediaQuery.removeEventListener('change', updateScenePreference);
      reducedMotionQuery.removeEventListener('change', updateScenePreference);
    };
  }, []);

  return (
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-background" aria-hidden="true">
          <span className="grid-glow grid-glow-one" />
          <span className="grid-glow grid-glow-two" />
        </div>

        <div className="hero-inner">
          <div className="hero-content" data-reveal>
            <p className="hero-greeting">Hi, I&apos;m Umang Kumar</p>

            <h1 id="hero-title">
              Full Stack
              <span> Developer</span>
            </h1>

            <p className="hero-copy">
              I build scalable, well-structured web applications with a focus on clean architecture,
              reusable frontend components, user roles and permissions, REST APIs, and database design.
              I approach every project by understanding requirements first and planning a structure that
              remains maintainable as the application grows.
            </p>

            <div className="button-row hero-actions">
              <a className="button button-primary" href="#projects">
                View My Work
                <ArrowRight size={17} aria-hidden="true" />
              </a>

              <a className="button button-ghost" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <div className="developer-visual" aria-label="Full stack development architecture illustration" data-reveal>
            <div className="hero-scene" aria-hidden="true">
              {shouldRender3D && (
                <Suspense fallback={null}>
                  <HeroScene />
                </Suspense>
              )}
            </div>

            <div className="visual-window visual-window-fallback">
              <div className="window-bar">
                <span />
                <span />
                <span />
              </div>

              <div className="code-lines" aria-hidden="true">
                <span className="wide" />
                <span />
                <span className="medium" />
                <span className="short" />
              </div>

              <div className="module-stack">
                <div>
                  <Layers3 size={18} aria-hidden="true" />
                  <span>Frontend architecture</span>
                </div>

                <div>
                  <ShieldCheck size={18} aria-hidden="true" />
                  <span>Roles & permissions</span>
                </div>

                <div>
                  <Database size={18} aria-hidden="true" />
                  <span>Database structure</span>
                </div>
              </div>
            </div>

            <div className="floating-chip chip-one">
              <Code2 size={16} aria-hidden="true" />
              React.js
            </div>

            <div className="floating-chip chip-two">
              API
            </div>

            <div className="floating-chip chip-three">
              MySQL
            </div>

            <div className="floating-chip chip-four">
              SSR
            </div>
          </div>
        </div>
      </section>
  );
}

export default Hero;
