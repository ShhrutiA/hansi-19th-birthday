import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINES = ['You found them all.', 'One last thing.'];

export default function LetterIntro({ onDone }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      if (i < LINES.length - 1) setI((v) => v + 1);
      else setTimeout(onDone, 1300);
    }, 1500);
    return () => clearTimeout(t);
  }, [i, onDone]);

  return (
    <div className="screen-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={i}
          className="display-title"
          style={{ fontSize: 'clamp(1.8rem, 6vw, 2.6rem)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8 }}
        >
          {LINES[i]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
