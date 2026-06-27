import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiSend, FiCopy, FiCheck } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import MagneticButton from '../ui/MagneticButton';
import { profile } from '../../data/profile';

const channels = [
  { Icon: FiGithub, label: 'GitHub', value: '@shivendrajith08', href: profile.socials.github },
  { Icon: FiLinkedin, label: 'LinkedIn', value: 'in/shivendra-jith', href: profile.socials.linkedin },
  { Icon: FiMail, label: 'Email', value: profile.email, href: profile.socials.email },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'someone'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const inputClass =
    'w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-mist placeholder:text-muted/70 outline-none transition-colors duration-300 focus:border-aurora-violet/60 focus:bg-white/[0.05]';

  return (
    <section id="contact" className="relative px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* left — invite */}
          <div className="space-y-8">
            <SectionHeading index="08" eyebrow="Contact" title="Let's build something" />
            <Reveal variant="up" delay={0.1}>
              <p className="max-w-md text-lg leading-relaxed text-muted">
                I'm open to full-time roles, internships and freelance work. Have a project or a team that needs a hand?
                Drop me a line — I usually reply within a day.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.2}>
              <div className="space-y-3">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.label === 'Email' ? undefined : '_blank'}
                    rel="noreferrer"
                    data-cursor="hover"
                    className="group glass flex items-center gap-4 rounded-2xl px-5 py-4 transition-colors duration-300 hover:border-white/15"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] text-aurora-violet transition-transform duration-300 group-hover:scale-110">
                      <c.Icon className="text-lg" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-xs uppercase tracking-[0.15em] text-muted">{c.label}</span>
                      <span className="text-mist/90">{c.value}</span>
                    </span>
                    <FiArrowUpRight className="text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-mist" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* right — form */}
          <Reveal variant="scale" delay={0.15}>
            <div className="glass relative overflow-hidden rounded-[32px] p-7 shadow-luxe sm:p-9">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-aurora-violet/20 blur-3xl" />
              <form onSubmit={onSubmit} className="relative space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm text-mist/80">Name</label>
                    <input id="name" name="name" value={form.name} onChange={onChange} required placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-mist/80">Email</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={onChange} required placeholder="you@email.com" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-mist/80">Message</label>
                  <textarea id="message" name="message" value={form.message} onChange={onChange} required rows={5} placeholder="Tell me about your project or role…" className={`${inputClass} resize-none`} />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <MagneticButton
                    as="button"
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-aurora-indigo via-aurora-violet to-aurora-rose px-7 py-3.5 font-medium text-white shadow-luxe"
                  >
                    Send message
                    <FiSend className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </MagneticButton>

                  <button
                    type="button"
                    onClick={copyEmail}
                    data-cursor="hover"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm text-muted transition-colors hover:text-mist"
                  >
                    {copied ? <><FiCheck className="text-emerald-400" /> Copied</> : <><FiCopy /> Copy email</>}
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
