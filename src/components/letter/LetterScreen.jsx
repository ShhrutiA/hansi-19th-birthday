import { motion } from 'framer-motion';
import { LETTER } from '../../content/letter';
import Button from '../shared/Button';
import './LetterScreen.css';

export default function LetterScreen({ onComplete }) {
  return (
    <motion.div
      className="letter screen-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="letter__paper"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {LETTER.paragraphs.map((p, i) => (
          <p key={i} className="letter__paragraph">{p}</p>
        ))}

        {LETTER.photos.length > 0 && (
          <div className="letter__photos">
            {LETTER.photos.map((src, i) => (
              <img key={i} src={src} alt="" className="letter__photo" />
            ))}
          </div>
        )}

        <p className="letter__signoff">{LETTER.signOff}</p>
        <p className="letter__signature display-title">{LETTER.signature}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <Button onClick={onComplete}>CONTINUE</Button>
      </motion.div>
    </motion.div>
  );
}
