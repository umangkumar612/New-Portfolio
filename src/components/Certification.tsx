import { useState } from 'react';
import { X, ZoomIn, Award } from 'lucide-react';
import { certification } from '@/data/portfolio';
import '@/styles/certification.css';

export default function Certification() {
  const [open, setOpen] = useState(false);

  return (
    <section className="section certification" id="certification">
      <div className="container">
        <p className="eyebrow reveal">Certification</p>
        <h2 className="section-title reveal">
          Verified <span className="text-accent">credentials.</span>
        </h2>

        <div
          className="cert-card reveal"
          onClick={() => setOpen(true)}
          data-cursor-hover
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}
        >
          <div className="cert-card__preview">
            <div className="cert-card__preview-glow" />
            <Award size={48} className="cert-card__icon" />
            <span className="cert-card__seal">CERTIFIED</span>
          </div>

          <div className="cert-card__body">
            <span className="cert-card__issuer">{certification.issuer}</span>
            <h3 className="cert-card__title">{certification.title}</h3>
            <p className="cert-card__program">{certification.program}</p>
            <span className="cert-card__period">{certification.period}</span>
            <span className="cert-card__zoom">
              <ZoomIn size={15} /> Click to preview
            </span>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="cert-modal"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
        >
          <button
            className="cert-modal__close"
            onClick={() => setOpen(false)}
            aria-label="Close preview"
          >
            <X size={22} />
          </button>
          <div className="cert-modal__content" onClick={(e) => e.stopPropagation()}>
            <img
              src="/assets/certificate.jpg"
              alt={`${certification.title} — ${certification.issuer} certificate`}
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.style.display = 'none';
                img.nextElementSibling?.classList.add('show');
              }}
            />
            <div className="cert-modal__fallback">
              <Award size={64} />
              <h3>{certification.title}</h3>
              <p>{certification.issuer}</p>
              <p>{certification.program}</p>
              <p>{certification.period}</p>
              <small>
                Add your certificate as /assets/certificate.jpg or .png to see it
                here.
              </small>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
