import { motion } from 'framer-motion';
import './MiniGameContainer.css';

export default function MiniGameContainer({ title, instructions, children, onSkip, showSkip = false }) {
  return (
    <motion.div
      className="minigame-container screen-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {title && <h2 className="display-title minigame-container__title">{title}</h2>}
      {instructions && <p className="minigame-container__instructions">{instructions}</p>}
      <div className="minigame-container__stage">{children}</div>

      {showSkip && onSkip && (
        <motion.button
          className="minigame-container__skip"
          onClick={onSkip}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Having trouble? Skip ahead →
        </motion.button>
      )}
    </motion.div>
  );
}
