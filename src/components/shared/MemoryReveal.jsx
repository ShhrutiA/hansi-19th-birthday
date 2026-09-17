import { motion } from 'framer-motion';
import PhotoFrame from './PhotoFrame';
import Button from './Button';
import './MemoryReveal.css';

export default function MemoryReveal({ photo, onContinue }) {
  return (
    <motion.div
      className="memory-reveal screen-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.span
        className="archival-label"
        initial={{ opacity: 0, letterSpacing: '0.5em' }}
        animate={{ opacity: 0.75, letterSpacing: '0.24em' }}
        transition={{ duration: 0.8 }}
      >
        MEMORY UNLOCKED
      </motion.span>

      <motion.div
        className="memory-reveal__photo"
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <PhotoFrame src={photo?.src} placeholderLabel={photo?.placeholderLabel} variant="frame" reveal={false} />
      </motion.div>

      <motion.div
        className="memory-reveal__meta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <span className="archival-label">AGE: {photo?.age}</span>
        <span className="archival-label">YEAR: {photo?.year}</span>
        <span className="archival-label">LOCATION: {photo?.location}</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <Button onClick={onContinue}>CONTINUE</Button>
      </motion.div>
    </motion.div>
  );
}
