import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Button/anchor that subtly follows the cursor (magnetic effect).
 */
export default function MagneticButton({ as = 'button', children, className = '', strength = 0.35, ...props }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 200, damping: 15 });
  const y = useSpring(my, { stiffness: 200, damping: 15 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    mx.set(relX * strength);
    my.set(relY * strength);
  };
  const reset = () => { mx.set(0); my.set(0); };

  const Comp = motion[as] || motion.button;
  return (
    <Comp
      ref={ref}
      data-cursor="hover"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={className}
      {...props}
    >
      {children}
    </Comp>
  );
}
