import { GraduationCap, Award, BadgeCheck } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { education, certifications } from '../../data/journey';

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-2 lg:items-start">
        {/* Education */}
        <div>
          <SectionHeading index="06" eyebrow="Education" title="Academic foundation" />
          <div className="mt-12 space-y-5">
            {education.map((e, i) => (
              <Reveal key={e.degree} variant="up" delay={i * 0.1}>
                <div className="group glass flex gap-5 rounded-3xl p-6 transition-colors duration-500 hover:border-white/15">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-aurora-indigo/30 to-aurora-rose/20 text-aurora-violet">
                    <GraduationCap className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted">{e.period}</p>
                    <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-mist">{e.degree}</h3>
                    <p className="mt-1 text-sm text-aurora-violet/90">{e.school}</p>
                    <p className="text-sm text-muted">{e.location}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <SectionHeading index="07" eyebrow="Certifications" title="Credentials & courses" />
          <div className="mt-12 space-y-5">
            {certifications.map((c, i) => (
              <Reveal key={c.title} variant="up" delay={i * 0.1}>
                <div className="group glass flex items-center gap-5 rounded-3xl p-6 transition-colors duration-500 hover:border-white/15">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-aurora-violet/30 to-aurora-indigo/20 text-aurora-violet">
                    <Award className="h-6 w-6" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-mist">{c.title}</h3>
                    <p className="text-sm text-muted">{c.issuer}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <BadgeCheck className="h-5 w-5 text-emerald-400" />
                    <span className="text-xs text-muted">{c.year}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
