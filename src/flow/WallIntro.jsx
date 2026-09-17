import { motion } from 'framer-motion';
import Button from '../components/shared/Button';

export default function WallIntro({ onContinue }) {
  return (
    <motion.div
      className="screen-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.p
        className="display-title"
        style={{ fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', marginBottom: '1rem' }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        THE ARCHIVE ISN'T QUITE COMPLETE.
      </motion.p>
      <motion.p
        style={{ color: 'var(--charcoal-soft)', marginBottom: '2.6rem', fontStyle: 'italic' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        There are a few things we still wanted to tell you.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <span className="archival-label" style={{ display: 'block', marginBottom: '1.6rem' }}>
          CLICK ON THE PHOTOS.
        </span>
        <Button onClick={onContinue}>CONTINUE</Button>
      </motion.div>
    </motion.div>
  );
}
