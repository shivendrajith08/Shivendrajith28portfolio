import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { Star, GitFork, BookMarked, Flame } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import MagneticButton from '../ui/MagneticButton';

const USER = 'shivendrajith08';

// Themed github-readme-stats cards (render as images, no API key)
const statsCard = `https://github-readme-stats.vercel.app/api?username=${USER}&show_icons=true&hide_border=true&bg_color=00000000&title_color=A855F7&icon_color=F472B6&text_color=8B92AB&include_all_commits=true`;
const streakCard = `https://streak-stats.demolab.com/?user=${USER}&hide_border=true&background=00000000&ring=A855F7&fire=F472B6&currStreakLabel=A855F7&sideLabels=8B92AB&dates=8B92AB&currStreakNum=F5F6FA&sideNums=F5F6FA&stroke=8B92AB`;
const langCard = `https://github-readme-stats.vercel.app/api/top-langs/?username=${USER}&layout=compact&hide_border=true&bg_color=00000000&title_color=A855F7&text_color=8B92AB&langs_count=8`;

const quickStats = [
  { Icon: BookMarked, label: 'Public repos', value: '12' },
  { Icon: Star, label: 'Focus', value: 'Full Stack' },
  { Icon: GitFork, label: 'Open source', value: 'Active' },
  { Icon: Flame, label: 'Building', value: 'Daily' },
];

export default function GitHubStats() {
  return (
    <section id="github" className="relative px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          index="05"
          eyebrow="GitHub"
          title="Code, commits & contributions"
          subtitle="A live look at what I've been building. Pulled straight from my GitHub activity."
        />

        {/* quick stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {quickStats.map((s, i) => (
            <Reveal key={s.label} variant="scale" delay={i * 0.08}>
              <div className="glass rounded-2xl p-5 text-center">
                <s.Icon className="mx-auto mb-2 h-5 w-5 text-aurora-violet" />
                <div className="font-display text-xl font-semibold text-mist">{s.value}</div>
                <p className="mt-0.5 text-xs text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* stat cards */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal variant="up">
            <div className="glass flex items-center justify-center rounded-3xl p-6">
              <img src={statsCard} alt="GitHub stats" loading="lazy" className="w-full max-w-md" />
            </div>
          </Reveal>
          <Reveal variant="up" delay={0.1}>
            <div className="glass flex items-center justify-center rounded-3xl p-6">
              <img src={streakCard} alt="GitHub streak" loading="lazy" className="w-full max-w-md" />
            </div>
          </Reveal>
          <Reveal variant="up" delay={0.15} className="lg:col-span-2">
            <div className="glass flex items-center justify-center rounded-3xl p-6">
              <img src={langCard} alt="Top languages" loading="lazy" className="w-full max-w-md" />
            </div>
          </Reveal>
        </div>

        <Reveal variant="up" className="mt-12 flex justify-center">
          <MagneticButton
            as="a"
            href={`https://github.com/${USER}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-mist px-6 py-3 font-medium text-ink-900"
          >
            <FiGithub /> Follow on GitHub
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
