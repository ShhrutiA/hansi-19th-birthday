import { motion } from 'framer-motion';
import Button from './Button';

export default function SuccessScreen({ label = 'MEMORY UNLOCKED', message, onContinue, ctaLabel = 'CONTINUE' }) {
  return (
    <motion.div
      className="screen-center"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="archival-label">{label}</span>
      {message && <p className="display-title" style={{ fontSize: '2rem', margin: '1rem 0 2rem' }}>{message}</p>}
      <Button onClick={onContinue}>{ctaLabel}</Button>
    </motion.div>
  );
}
