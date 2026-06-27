import {
  SiPython, SiJavascript, SiReact, SiFlask, SiDjango, SiSpringboot,
  SiMysql, SiPostgresql, SiHtml5, SiCss, SiGit, SiGithub,
  SiBootstrap, SiVite, SiTailwindcss,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'Java', Icon: FaJava, color: '#ED8B00' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
      { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'Flask', Icon: SiFlask, color: '#FFFFFF' },
      { name: 'Django', Icon: SiDjango, color: '#44B78B' },
      { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3' },
      { name: 'Vite', Icon: SiVite, color: '#646CFF' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF' },
    ],
  },
];

// Flat marquee list
export const allSkills = skillGroups.flatMap((g) => g.skills);
