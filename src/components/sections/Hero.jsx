import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDownRight } from 'react-icons/fi';
import { MousePointer2 } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { profile } from '../../data/profile';

const letter = {
  hidden: { y: '110%', opacity: 0 },
  show: (i) => ({
    y: '0%',
    opacity: 1,
    transition: { delay: 0.5 + i * 0.04, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

function AnimatedWord({ text, className = '' }) {
  return (
    <span className={`inline-flex overflow-hidden ${className}`}>
      {text.split('').map((c, i) => (
        <motion.span key={i} custom={i} variants={letter} initial="hidden" animate="show" className="inline-block">
          {c === ' ' ? '\u00A0' : c}
        </motion.span>
      ))}
    </span>
  );
}

const socials = [
  { Icon: FiGithub, href: profile.socials.github, label: 'GitHub' },
  { Icon: FiLinkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  { Icon: FiMail, href: profile.socials.email, label: 'Email' },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col justify-center px-6 pt-28 pb-20 sm:px-10 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        {/* status pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm text-mist/80"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for opportunities
        </motion.div>

        {/* eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-3 font-sans text-sm uppercase tracking-[0.3em] text-aurora-violet/90 sm:text-base"
        >
          {profile.role}
        </motion.p>

        {/* name */}
        <h1 className="font-display font-semibold tracking-tightest leading-[0.92] text-mist">
          <span className="block text-[clamp(3rem,11vw,9.5rem)]">
            <AnimatedWord text={profile.firstName} />
          </span>
          <span className="block text-[clamp(3rem,11vw,9.5rem)] text-aurora">
            <AnimatedWord text={profile.lastName} />
          </span>
        </h1>

        {/* tagline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-muted sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        {/* CTAs + socials */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center"
        >
          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton
              as="a"
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-mist px-7 py-3.5 font-medium text-ink-900 shadow-luxe"
            >
              <span className="relative z-10">View my work</span>
              <FiArrowDownRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              <span className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-r from-aurora-indigo via-aurora-violet to-aurora-rose transition-transform duration-500 group-hover:translate-y-0" />
            </MagneticButton>

            <MagneticButton
              as="a"
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium text-mist transition-colors duration-300 hover:bg-white/[0.07]"
            >
              Get in touch
            </MagneticButton>
          </div>

          <div className="hidden h-8 w-px bg-white/10 sm:block" />

          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <MagneticButton
                key={label}
                as="a"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                strength={0.5}
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-mist/70 transition-colors duration-300 hover:text-mist"
              >
                <Icon className="text-lg" />
              </MagneticButton>
            ))}
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-muted sm:flex"
        data-cursor="hover"
      >
        <span className="text-xs uppercase tracking-[0.25em]">Scroll</span>
        <span className="relative flex h-10 w-6 justify-center rounded-full border border-white/15 pt-2">
          <span className="h-1.5 w-1.5 animate-scroll-dot rounded-full bg-aurora-violet" />
        </span>
      </motion.a>

      {/* floating hint chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-10 right-6 hidden animate-float-slow items-center gap-2 text-xs text-muted lg:flex"
      >
        <MousePointer2 className="h-3.5 w-3.5 text-aurora-violet" />
        Move your cursor
      </motion.div>
    </section>
  );
}
