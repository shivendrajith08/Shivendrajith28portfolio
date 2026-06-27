import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { experience } from '../../data/journey';

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Where I've learned & built"
          subtitle="Hands-on training and real project work that shaped how I approach full-stack development."
        />

        <div className="relative mt-16">
          {/* vertical line */}
          <div className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-aurora-violet via-aurora-indigo/40 to-transparent sm:left-1/2" />

          <div className="space-y-12">
            {experience.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={item.org} variant={left ? 'left' : 'right'} amount={0.3}>
                  <div className={`relative flex flex-col gap-4 sm:flex-row ${left ? '' : 'sm:flex-row-reverse'}`}>
                    {/* node */}
                    <span className="absolute left-0 top-2 z-10 h-4 w-4 rounded-full border-2 border-ink-800 bg-gradient-to-br from-aurora-indigo to-aurora-rose sm:left-1/2 sm:-translate-x-1/2" />

                    <div className="hidden sm:block sm:w-1/2" />

                    <div className={`pl-8 sm:w-1/2 sm:pl-0 ${left ? 'sm:pr-12' : 'sm:pl-12'}`}>
                      <div className="glass rounded-3xl p-6 transition-colors duration-500 hover:border-white/15">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-aurora-violet/15 px-3 py-1 text-xs font-medium text-aurora-violet">
                            {item.type}
                          </span>
                          <span className="text-xs text-muted">{item.period}</span>
                        </div>
                        <h3 className="mt-3 font-display text-xl font-semibold text-mist">{item.role}</h3>
                        <p className="mt-0.5 text-sm text-aurora-violet/90">
                          {item.org} · <span className="text-muted">{item.location}</span>
                        </p>
                        <ul className="mt-4 space-y-2">
                          {item.points.map((p) => (
                            <li key={p} className="flex items-start gap-2 text-sm leading-relaxed text-mist/70">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-aurora-indigo to-aurora-rose" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
