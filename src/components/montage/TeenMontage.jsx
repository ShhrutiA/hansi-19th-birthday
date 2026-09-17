import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TEEN_MONTAGE_PHOTOS } from '../../content/photos';
import { AUDIO } from '../../content/audio';
import Button from '../shared/Button';
import { Howl } from 'howler';
import './TeenMontage.css';

const SLIDE_DURATION_MS = 3200;

export default function TeenMontage({ onComplete }) {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const soundRef = useRef(null);

  const isLast = index === TEEN_MONTAGE_PHOTOS.length - 1;

  useEffect(() => {
    if (!started) return undefined;
    if (isLast) return undefined;
    const t = setTimeout(() => setIndex((i) => i + 1), SLIDE_DURATION_MS);
    return () => clearTimeout(t);
  }, [started, index, isLast]);

  const handleStart = () => {
    setStarted(true);
    try {
      const sound = new Howl({ src: [AUDIO.montage.song], volume: 0, html5: true });
      sound.on('loaderror', () => {});
      sound.on('load', () => {
        soundRef.current = sound;
        sound.play();
        sound.fade(0, 0.5, 1200);
      });
    } catch {
      // no-op — placeholder audio expected before real song is provided
    }
  };

  useEffect(() => () => {
    const sound = soundRef.current;
    if (sound) {
      sound.fade(sound.volume(), 0, 600);
      setTimeout(() => sound.unload(), 650);
    }
  }, []);

  if (!started) {
    return (
      <div className="screen-center montage-start">
        <span className="archival-label">CHAPTER 06 &middot; TEEN HANSI</span>
        <h2 className="display-title montage-start__title">A Short Film</h2>
        <p className="montage-start__hint">Turn your sound on.</p>
        <Button onClick={handleStart}>PLAY</Button>
      </div>
    );
  }

  const photo = TEEN_MONTAGE_PHOTOS[index];

  return (
    <div className="montage">
      <AnimatePresence mode="wait">
        <motion.div
          key={photo.id}
          className="montage__slide"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {photo.src ? (
            <motion.img
              src={photo.src}
              alt=""
              className="montage__img"
              initial={{ scale: 1 }}
              animate={{ scale: 1.12 }}
              transition={{ duration: SLIDE_DURATION_MS / 1000 + 0.5, ease: 'linear' }}
            />
          ) : (
            <div className="montage__placeholder archival-label">{photo.placeholderLabel}</div>
          )}
          {photo.caption && <p className="montage__caption">{photo.caption}</p>}
        </motion.div>
      </AnimatePresence>

      <div className="montage__progress">
        {TEEN_MONTAGE_PHOTOS.map((p, i) => (
          <span key={p.id} className={`montage__dot ${i <= index ? 'montage__dot--filled' : ''}`} />
        ))}
      </div>

      {isLast && (
        <motion.div
          className="montage__continue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <Button onClick={onComplete}>CONTINUE</Button>
        </motion.div>
      )}
    </div>
  );
}
