import { motion } from 'framer-motion';

const variants = {
  up: { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } },
  blur: { hidden: { opacity: 0, filter: 'blur(12px)', y: 24 }, show: { opacity: 1, filter: 'blur(0px)', y: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } },
  left: { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0 } },
};

/**
 * Scroll-triggered reveal. variant: up | blur | scale | left | right
 */
export default function Reveal({ children, variant = 'up', delay = 0, className = '', once = true, amount = 0.3 }) {
  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
