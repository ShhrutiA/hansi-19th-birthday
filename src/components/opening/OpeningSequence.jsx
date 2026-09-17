import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CHAPTER_PHOTOS } from '../../content/photos';
import PhotoFrame from '../shared/PhotoFrame';
import Button from '../shared/Button';
import './OpeningSequence.css';

const BEATS = ['ARCHIVE_01', 'SUBJECT: HANSI', 'AGE: 0'];

export default function OpeningSequence({ onContinue }) {
  const [beatIndex, setBeatIndex] = useState(0);
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    if (beatIndex >= BEATS.length - 1) {
      const t = setTimeout(() => setShowPhoto(true), 1100);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setBeatIndex((i) => i + 1), 1000);
    return () => clearTimeout(t);
  }, [beatIndex]);

  return (
    <div className="opening screen-center">
      {!showPhoto ? (
        <AnimatePresence mode="wait">
          <motion.p
            key={beatIndex}
            className="archival-label opening__beat"
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.24em' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
          >
            {BEATS[beatIndex]}
          </motion.p>
        </AnimatePresence>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="opening__photo">
            <PhotoFrame src={CHAPTER_PHOTOS.newborn.src} placeholderLabel={CHAPTER_PHOTOS.newborn.placeholderLabel} variant="scan" />
          </div>
          <motion.p
            className="display-title opening__line"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9 }}
          >
            Every story starts somewhere.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <Button onClick={onContinue}>BEGIN</Button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
