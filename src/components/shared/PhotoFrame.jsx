import { motion } from 'framer-motion';
import './PhotoFrame.css';

// variant: 'frame' (subtle wood-accent frame), 'scan' (archival scan edges), 'strip' (film-strip)
export default function PhotoFrame({ src, alt = '', placeholderLabel, variant = 'frame', reveal = true }) {
  const hasPhoto = Boolean(src);

  return (
    <motion.div
      className={`photo-frame photo-frame--${variant}`}
      initial={reveal ? { opacity: 0, filter: 'blur(14px)', scale: 1.03 } : false}
      animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="photo-frame__inner">
        {hasPhoto ? (
          <img src={src} alt={alt} className="photo-frame__img" />
        ) : (
          <div className="photo-frame__placeholder">
            <span className="archival-label">{placeholderLabel ?? '[PHOTO]'}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
