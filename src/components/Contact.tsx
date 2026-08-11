import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { personal } from '@/data/portfolio';
import '@/styles/contact.css';

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact__backdrop" aria-hidden />
      <div className="container contact__inner">
        <p className="eyebrow reveal">Get in touch</p>
        <h2 className="contact__title reveal">
          Let's build something <em>worth remembering.</em>
        </h2>
        <p className="contact__intro reveal">
          Have a product, platform, or ambitious idea in mind? I bring a systems
          mindset to every build.
        </p>

        <div className="contact__grid">
          <div className="contact__details reveal">
            <a href={`mailto:${personal.email}`} className="contact__detail">
              <Mail size={18} />
              <span>{personal.email}</span>
            </a>
            <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="contact__detail">
              <Phone size={18} />
              <span>{personal.phone}</span>
            </a>
            <div className="contact__detail">
              <MapPin size={18} />
              <span>{personal.location}</span>
            </div>
          </div>

          <div className="contact__actions reveal">
            <a href={`mailto:${personal.email}`} className="btn btn-primary magnetic">
              Email Me <ArrowUpRight size={16} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost magnetic">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost magnetic">
              <Github size={16} /> GitHub
            </a>
            <a href="/assets/Umang-Kumar-Resume.pdf" download className="btn btn-ghost magnetic">
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
