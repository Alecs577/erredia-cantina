import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { revealUp } from '../utils/motion';
import { cn } from '../utils/cn';

export function ScrollReveal({ children, className, delay = 0, as: Component = 'div' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-8% 0px' });

  return (
    <Component ref={ref} className={cn(className)}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{
          ...revealUp,
          visible: {
            ...revealUp.visible,
            transition: {
              ...revealUp.visible.transition,
              delay,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </Component>
  );
}
