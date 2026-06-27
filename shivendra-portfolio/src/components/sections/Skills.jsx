import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { skillGroups, allSkills } from '../../data/skills';

function Marquee() {
  const row = [...allSkills, ...allSkills];
  return (
    <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <motion.div
        className="flex w-max gap-4"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {row.map((s, i) => (
          <div
            key={i}
            className="glass flex items-center gap-2.5 rounded-2xl px-5 py-3 text-mist/85"
          >
            <s.Icon className="text-xl" style={{ color: s.color }} />
            <span className="whitespace-nowrap text-sm font-medium">{s.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="The tools I build with"
          subtitle="A full-stack toolkit spanning languages, frameworks, databases and the workflow tools that tie it all together."
        />

        <Marquee />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} variant="up" delay={gi * 0.08}>
              <div className="glass h-full rounded-3xl p-6 transition-colors duration-500 hover:border-white/15">
                <h3 className="mb-5 font-display text-lg font-semibold text-mist">{group.title}</h3>
                <div className="flex flex-col gap-3">
                  {group.skills.map((s) => (
                    <div
                      key={s.name}
                      className="group flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-3 py-2.5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                    >
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] transition-transform duration-300 group-hover:scale-110"
                        style={{ color: s.color }}
                      >
                        <s.Icon className="text-lg" />
                      </span>
                      <span className="text-sm font-medium text-mist/85">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
