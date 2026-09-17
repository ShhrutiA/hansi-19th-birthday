import { motion } from 'framer-motion';
import Button from './Button';

export default function FailureScreen({ message = 'Almost there.', onRetry }) {
  return (
    <motion.div
      className="screen-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="display-title" style={{ fontSize: '1.8rem', margin: '0 0 2rem' }}>{message}</p>
      <Button variant="ghost" onClick={onRetry}>TRY AGAIN</Button>
    </motion.div>
  );
}
