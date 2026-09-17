import { motion } from 'framer-motion';
import Button from './Button';
import './ChapterIntro.css';

export default function ChapterIntro({ chapter, onContinue, ctaLabel = 'CONTINUE' }) {
  const ambient = chapter.ambient;

  return (
    <motion.div
      className="chapter-intro screen-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {ambient && (
        <motion.div
          className="chapter-intro__ambient"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {ambient.src ? (
            <img src={ambient.src} alt="" />
          ) : (
            <div className="chapter-intro__ambient-placeholder">
              <span className="archival-label">{ambient.placeholderLabel}</span>
            </div>
          )}
        </motion.div>
      )}

      <motion.span
        className="archival-label"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {chapter.code} &middot; AGE: {chapter.age}
      </motion.span>

      <motion.p
        className="archival-label chapter-intro__label"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        CHAPTER {String(chapter.index).padStart(2, '0')}
      </motion.p>

      <motion.h1
        className="display-title chapter-intro__title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {chapter.title}
      </motion.h1>

      <motion.p
        className="chapter-intro__subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        {chapter.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <Button onClick={onContinue}>{ctaLabel}</Button>
      </motion.div>
    </motion.div>
  );
}
