import { useRef } from 'react';
import { orbitSkills, skills } from '@/data/portfolio';
import '@/styles/skills.css';

export default function Skills() {
  const wrapRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <p className="eyebrow reveal">Tech Universe</p>
        <h2 className="section-title reveal">
          The stack I build with, <span className="text-accent">orbiting.</span>
        </h2>
      </div>

      <div className="skills__orbit-wrap" ref={wrapRef}>
        <div className="skills__orbit">
          <div className="skills__core" />
          {orbitSkills.map((s, i) => {
            const angle = (i / orbitSkills.length) * Math.PI * 2;
            const radius = 38;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const delay = (i * 0.4).toFixed(2);
            return (
              <div
                className="skills__node"
                style={
                  {
                    '--x': `${x}%`,
                    '--y': `${y}%`,
                    '--d': `${delay}s`,
                  } as React.CSSProperties
                }
                key={s}
                data-cursor-hover
              >
                <span>{s}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container">
        <div className="skills__categories">
          {(
            [
              ['Languages', skills.languages],
              ['Frontend', skills.frontend],
              ['Backend', skills.backend],
              ['Database', skills.database],
              ['Tools', skills.tools],
            ] as [string, string[]][]
          ).map(([cat, items]) => (
            <div className="skills__cat reveal" key={cat}>
              <h3 className="skills__cat-title">{cat}</h3>
              <div className="skills__pills">
                {items.map((s) => (
                  <span className="skill-pill" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills__highlights" data-stagger>
          {skills.highlights.map((h) => (
            <span className="skills__highlight" data-stagger-item key={h}>
              {h}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
