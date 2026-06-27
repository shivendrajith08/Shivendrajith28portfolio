import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { profile } from '../../data/profile';

const socials = [
  { Icon: FiGithub, href: profile.socials.github, label: 'GitHub' },
  { Icon: FiLinkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  { Icon: FiMail, href: profile.socials.email, label: 'Email' },
];

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const go = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    if (window.lenis) window.lenis.scrollTo(el, { offset: -40 });
    else el.scrollIntoView({ behavior: 'smooth' });
  };

  const toTop = () => {
    if (window.lenis) window.lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.06] px-6 py-14 sm:px-10 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* brand */}
          <div className="max-w-sm">
            <a href="#home" onClick={(e) => go(e, '#home')} className="font-display text-2xl font-semibold text-mist" data-cursor="hover">
              {profile.firstName}<span className="text-aurora-violet">.</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {profile.role} based in {profile.location}. Building scalable software and solving real-world problems.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={label}
                  data-cursor="hover"
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-mist/70 transition-colors duration-300 hover:text-mist"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* nav */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Navigate</p>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => go(e, l.href)}
                data-cursor="hover"
                className="text-sm text-mist/70 transition-colors duration-300 hover:text-mist"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start gap-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Get in touch</p>
            <a href={profile.socials.email} data-cursor="hover" className="font-display text-lg text-mist transition-colors hover:text-aurora-violet">
              {profile.email}
            </a>
            <button
              onClick={toTop}
              data-cursor="hover"
              className="glass mt-2 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-mist/80 transition-colors duration-300 hover:text-mist"
            >
              Back to top <FiArrowUp />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Designed & built with React, Tailwind & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
