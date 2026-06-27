import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import TiltCard from '../ui/TiltCard';
import MagneticButton from '../ui/MagneticButton';
import { projects } from '../../data/projects';

function TechChips({ tech }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span
          key={t}
          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-mist/70"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ live, github }) {
  return (
    <div className="flex items-center gap-3">
      <MagneticButton
        as="a"
        href={live}
        target="_blank"
        rel="noreferrer"
        strength={0.4}
        className="group/btn inline-flex items-center gap-1.5 rounded-full bg-mist px-4 py-2 text-sm font-medium text-ink-900 transition-transform"
      >
        Live demo
        <FiArrowUpRight className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
      </MagneticButton>
      <MagneticButton
        as="a"
        href={github}
        target="_blank"
        rel="noreferrer"
        strength={0.4}
        aria-label="GitHub repository"
        className="glass inline-flex h-9 items-center gap-1.5 rounded-full px-4 text-sm text-mist/80 transition-colors hover:text-mist"
      >
        <FiGithub /> Code
      </MagneticButton>
    </div>
  );
}

function FeaturedCard({ project, index }) {
  const flip = index % 2 === 1;
  return (
    <Reveal variant="up" amount={0.2}>
      <article className="group glass overflow-hidden rounded-[28px] p-2 shadow-luxe transition-colors duration-500 hover:border-white/15">
        <div className={`grid items-stretch gap-2 lg:grid-cols-2 ${flip ? 'lg:[direction:rtl]' : ''}`}>
          {/* image */}
          <div className="relative overflow-hidden rounded-3xl [direction:ltr]">
            <div className="absolute inset-0 bg-gradient-to-tr from-aurora-indigo/30 via-transparent to-aurora-rose/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              className="h-full min-h-[260px] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <span className="absolute left-4 top-4 rounded-full bg-ink-900/70 px-3 py-1 text-xs font-medium text-mist/80 backdrop-blur">
              {project.year}
            </span>
          </div>

          {/* content */}
          <div className="flex flex-col justify-between gap-6 p-6 [direction:ltr] sm:p-8">
            <div className="space-y-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-aurora-violet/90">{project.subtitle}</p>
                <h3 className="mt-1 font-display text-3xl font-semibold tracking-tight text-mist sm:text-4xl">
                  {project.title}
                </h3>
              </div>
              <p className="text-muted leading-relaxed">{project.description}</p>
              <ul className="space-y-1.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-mist/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-aurora-indigo to-aurora-rose" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <TechChips tech={project.tech} />
              <ProjectLinks live={project.live} github={project.github} />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function CompactCard({ project, delay }) {
  return (
    <Reveal variant="up" delay={delay} amount={0.2}>
      <TiltCard className="h-full">
        <article className="group glass flex h-full flex-col overflow-hidden rounded-[24px] p-2 transition-colors duration-500 hover:border-white/15">
          <div className="relative overflow-hidden rounded-[18px]">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink-900/80 to-transparent opacity-70" />
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <span className="absolute right-3 top-3 z-20 rounded-full bg-ink-900/70 px-2.5 py-1 text-xs text-mist/80 backdrop-blur">
              {project.year}
            </span>
          </div>
          <div className="flex flex-1 flex-col gap-4 p-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-aurora-violet/90">{project.subtitle}</p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-mist">{project.title}</h3>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
            <TechChips tech={project.tech} />
            <ProjectLinks live={project.live} github={project.github} />
          </div>
        </article>
      </TiltCard>
    </Reveal>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          index="04"
          eyebrow="Featured Work"
          title="Projects I've shipped"
          subtitle="A selection of products I've designed and engineered end-to-end — each live, deployed, and built to solve a real problem."
        />

        <div className="mt-16 space-y-8">
          {featured.map((p, i) => (
            <FeaturedCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <CompactCard key={p.id} project={p} delay={i * 0.1} />
            ))}
          </div>
        )}

        <Reveal variant="up" className="mt-14 flex justify-center">
          <MagneticButton
            as="a"
            href="https://github.com/shivendrajith08"
            target="_blank"
            rel="noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-mist transition-colors hover:bg-white/[0.07]"
          >
            <FiGithub /> View all repositories
            <FiArrowUpRight />
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
