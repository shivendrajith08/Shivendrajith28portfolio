import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code2, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Counter from '../ui/Counter';
import { profile } from '../../data/profile';

const stats = [
  { value: 4, suffix: '+', label: 'Projects shipped' },
  { value: 10, suffix: '+', label: 'Technologies' },
  { value: 6, suffix: ' mo', label: 'Internship experience' },
];

const facts = [
  { Icon: GraduationCap, label: 'MCA — Alagappa University' },
  { Icon: Code2, label: 'Full Stack — Python & Java' },
  { Icon: MapPin, label: profile.location },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        {/* left — narrative */}
        <div className="space-y-8">
          <SectionHeading index="01" eyebrow="About" title="Engineer at heart, builder by craft" />

          <Reveal variant="up" delay={0.1} className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I'm <span className="text-mist">Shivendra</span>, a full stack developer who likes turning fuzzy ideas into
              software people can actually use. I work across the stack — designing clean REST APIs with
              <span className="text-mist"> Flask, Django and Spring Boot</span>, and shaping responsive front-ends with
              <span className="text-mist"> React</span>.
            </p>
            <p>
              I hold a <span className="text-mist">Master of Computer Applications</span> and sharpened my craft during a
              full stack internship at <span className="text-mist">Suffix E Solutions</span>, where I built responsive
              interfaces, wired up RESTful APIs, and managed MySQL databases end-to-end. I care about MVC structure, version
              control, and writing code that's easy to come back to.
            </p>
            <p>
              Right now I'm focused on building polished, production-ready products — and looking for a team where I can keep
              shipping and growing.
            </p>
          </Reveal>

          {/* stats */}
          <Reveal variant="up" delay={0.2}>
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-5 text-center sm:text-left">
                  <div className="font-display text-3xl font-semibold text-aurora sm:text-4xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-1 text-xs leading-snug text-muted sm:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* right — identity card */}
        <Reveal variant="scale" delay={0.15}>
          <div className="relative">
            {/* glow */}
            <div className="absolute -inset-4 -z-10 rounded-[36px] bg-gradient-to-br from-aurora-indigo/30 via-aurora-violet/20 to-aurora-rose/20 blur-2xl" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="glass overflow-hidden rounded-[32px] p-8 shadow-luxe"
            >
              {/* monogram */}
              <div className="flex items-center justify-between">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-aurora-indigo to-aurora-rose font-display text-3xl font-semibold text-white shadow-luxe">
                  SJ
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 ring-4 ring-ink-800">
                    <Sparkles className="h-3 w-3 text-ink-900" />
                  </span>
                </div>
                <div className="text-right">
                  <p className="font-display text-xl font-semibold text-mist">{profile.name}</p>
                  <p className="text-sm text-aurora-violet/90">{profile.role}</p>
                </div>
              </div>

              {/* facts */}
              <div className="mt-8 space-y-3">
                {facts.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] text-aurora-violet">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-mist/85">{label}</span>
                  </div>
                ))}
              </div>

              {/* availability strip */}
              <div className="mt-8 flex items-center justify-between rounded-2xl bg-gradient-to-r from-aurora-indigo/15 to-aurora-rose/10 px-4 py-3">
                <span className="flex items-center gap-2 text-sm text-mist/85">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Open to opportunities
                </span>
                <span className="text-xs text-muted">2025</span>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
