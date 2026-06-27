import Reveal from './Reveal';

/**
 * Consistent section header: eyebrow index + title + optional subtitle.
 */
export default function SectionHeading({ index, eyebrow, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  return (
    <div className={`flex flex-col gap-4 ${alignment} max-w-2xl`}>
      <Reveal variant="up">
        <div className="flex items-center gap-3 text-sm font-medium tracking-widest text-muted uppercase">
          {index && <span className="text-aurora-violet/90 font-display">{index}</span>}
          <span className="h-px w-8 bg-gradient-to-r from-aurora-violet to-transparent" />
          <span>{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal variant="blur" delay={0.08}>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tightest leading-[1.02] text-gradient">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal variant="up" delay={0.16}>
          <p className="text-muted text-base sm:text-lg leading-relaxed">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
