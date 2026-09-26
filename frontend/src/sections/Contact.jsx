import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Button from '../components/Button';
import TiltCard from '../components/TiltCard';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { contactService } from '../services/api';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      await contactService.send(formState);
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.response?.data?.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <Section
      id="contact"
      heading="Let's Work Together — Get In Touch"
      subheading="Have an opportunity, project, or collaboration in mind? Drop a message below."
      label="// 08. CONTACT"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-start">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <TiltCard className="p-5 sm:p-7 space-y-6">
            <h3 className="text-xl font-display font-bold text-white">
              Contact Channels
            </h3>
            <p className="text-muted text-xs md:text-sm leading-relaxed">
              Feel free to reach out directly through any of these communication channels. I respond promptly to inquiries.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="mailto:omjaiswal942@gmail.com"
                className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                  <FaEnvelope size={18} />
                </div>
                <div className="space-y-0.5 text-left min-w-0">
                  <span className="text-[11px] font-mono text-muted uppercase block">Email Address</span>
                  <span className="block text-sm font-mono text-white font-medium group-hover:text-primary transition-colors break-all">omjaiswal942@gmail.com</span>
                </div>
              </a>

              <a
                href="tel:+918770180357"
                className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                  <FaPhone size={18} />
                </div>
                <div className="space-y-0.5 text-left min-w-0">
                  <span className="text-[11px] font-mono text-muted uppercase block">Phone Contact</span>
                  <span className="block text-sm font-mono text-white font-medium group-hover:text-emerald-400 transition-colors break-all">+91-8770180357</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div className="space-y-0.5 text-left min-w-0">
                  <span className="text-[11px] font-mono text-muted uppercase block">Location</span>
                  <span className="block text-sm font-mono text-white font-medium break-words">Indore, Madhya Pradesh, India</span>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card p-5 sm:p-8 md:p-10 rounded-2xl border border-white/10 space-y-6 relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Error Banner */}
            {status === 'error' && errorMessage && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-xs font-mono flex items-center gap-3">
                <FaExclamationTriangle size={16} className="shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Success Overlay */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 z-20 bg-surface-card/95 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-3xl shadow-glow-emerald">
                  <FaCheckCircle />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">Message Transmitted!</h3>
                <p className="text-muted text-sm max-w-md">
                  Thank you for reaching out. I have received your submission and will respond shortly.
                </p>
                <Button variant="outline" size="sm" onClick={() => setStatus('idle')}>
                  Send Another Message
                </Button>
              </motion.div>
            )}

            <div className="space-y-5">
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase text-muted">Your Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans placeholder:text-muted/40"
                  placeholder="e.g. Alex Morgan"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase text-muted">Your Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans placeholder:text-muted/40"
                  placeholder="e.g. alex@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase text-muted">Message</label>
                <textarea
                  required
                  rows="4"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans placeholder:text-muted/40 resize-none"
                  placeholder="Tell me about your project, idea, or inquiry..."
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              loading={status === 'sending'}
              icon={<FaPaperPlane />}
            >
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
