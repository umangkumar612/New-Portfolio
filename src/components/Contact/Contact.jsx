import { useState } from 'react';
import { Github, Instagram, Linkedin, Mail, Send } from 'lucide-react';
import { profile } from '../../data/portfolioData';
import './Contact.css';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const validateForm = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Name is required.';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) nextErrors.email = 'Enter a valid email address.';
    if (!formData.subject.trim()) nextErrors.subject = 'Subject is required.';
    if (formData.message.trim().length < 10) {
      nextErrors.message = 'Message should be at least 10 characters.';
    }
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus('');
      return;
    }

    setStatus('Message ready to send. Connect an email/API service to deliver it.');
    setFormData(initialForm);
  };

  return (
      <section className="site-section contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-shell contact-grid" data-reveal>
          <div>
            <span className="section-kicker">Contact</span>
            <h2 className="section-title" id="contact-title">
              Let&apos;s discuss an internship, role, or project.
            </h2>
            <p className="section-lede">
              Feel free to connect with me through email or my social profiles.
            </p>

            <div className="contact-links" aria-label="Social links">
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={18} aria-hidden="true" />
                Email
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={18} aria-hidden="true" />
                GitHub
              </a>
              {profile.instagram && (
                  <a href={profile.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram size={18} aria-hidden="true" />
                    Instagram
                  </a>
              )}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label>
              Name
              <input name="name" value={formData.name} onChange={handleChange} autoComplete="name" />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </label>

            <label>
              Email
              <input name="email" type="email" value={formData.email} onChange={handleChange} autoComplete="email" />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </label>

            <label>
              Subject
              <input name="subject" value={formData.subject} onChange={handleChange} />
              {errors.subject && <span className="form-error">{errors.subject}</span>}
            </label>

            <label>
              Message
              <textarea name="message" rows="5" value={formData.message} onChange={handleChange} />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </label>

            <button className="button button-primary" type="submit">
              <Send size={16} aria-hidden="true" />
              Send Message
            </button>
            {status && <p className="form-status" role="status">{status}</p>}
          </form>
        </div>
      </section>
  );
}

export default Contact;
