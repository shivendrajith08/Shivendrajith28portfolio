import { useEffect, useRef } from 'react';

/**
 * Signature ambient background: drifting aurora mesh-gradient blobs +
 * a cursor-reactive light, with a fine grain + grid overlay.
 * Pure CSS transforms — GPU friendly, no canvas cost.
 */
export default function AuroraBackground() {
  const glowRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return;
    let frame;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
        }
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(frame); };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-900">
      {/* drifting aurora blobs */}
      <div className="absolute -left-[10%] -top-[15%] h-[55vw] w-[55vw] rounded-full bg-aurora-indigo/30 blur-[120px] animate-aurora-drift" />
      <div className="absolute right-[-12%] top-[5%] h-[48vw] w-[48vw] rounded-full bg-aurora-violet/25 blur-[130px] animate-aurora-drift [animation-delay:-6s]" />
      <div className="absolute bottom-[-18%] left-[20%] h-[50vw] w-[50vw] rounded-full bg-aurora-rose/20 blur-[140px] animate-aurora-drift [animation-delay:-11s]" />

      {/* cursor-reactive glow */}
      <div ref={glowRef} className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-aurora-violet/10 blur-[100px] will-change-transform" />

      {/* fine grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
        }}
      />

      {/* vignette + grain */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(7,10,18,0.85)_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
