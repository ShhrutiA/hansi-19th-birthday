import { motion } from 'framer-motion';
import './PhotoFlip.css';

export default function PhotoFlip({ photo, isClicked, onClick, rotation = 0 }) {
  return (
    <motion.button
      className={`photo-flip ${isClicked ? 'photo-flip--clicked' : 'photo-flip--idle-float'}`}
      onClick={onClick}
      style={{ rotate: rotation }}
      whileHover={{ y: -6, rotate: 0 }}
      aria-label={isClicked ? 'View message again' : 'Click to reveal a message'}
    >
      <motion.div
        className="photo-flip__inner"
        animate={{ rotateY: isClicked ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="photo-flip__face photo-flip__face--front">
          {photo.src ? (
            <img src={photo.src} alt="" />
          ) : (
            <span className="archival-label">{photo.placeholderLabel}</span>
          )}
          {!isClicked && <span className="photo-flip__cue">click me</span>}
        </div>
        <div className="photo-flip__face photo-flip__face--back">
          <p>{photo.message}</p>
        </div>
      </motion.div>
    </motion.button>
  );
}
