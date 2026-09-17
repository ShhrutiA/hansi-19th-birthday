import { motion } from 'framer-motion';

// Shared cinematic transition wrapper — a slow zoom + fade rather than a flat
// fade/load/fade, so consecutive stages feel like one continuous timeline.
const variants = {
  initial: { opacity: 0, scale: 1.04, filter: 'blur(6px)' },
  animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  exit: { opacity: 0, scale: 0.98, filter: 'blur(4px)' },
};

export default function ChapterTransition({ stageKey, children }) {
  return (
    <motion.div
      key={stageKey}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}
