import { motion } from 'framer-motion';
import { FINAL_MESSAGE } from '../../content/finalMessage';
import './FinalReveal.css';

export default function FinalReveal() {
  return (
    <div className="final-reveal screen-center">
      {FINAL_MESSAGE.photo && (
        <motion.img
          src={FINAL_MESSAGE.photo}
          alt=""
          className="final-reveal__bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.18 }}
          transition={{ duration: 2 }}
        />
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: [0, 1, 0.9, 1], scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="final-reveal__spark"
      />

      {FINAL_MESSAGE.heading.map((line, i) => (
        <motion.h1
          key={i}
          className="display-title final-reveal__line"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {line}
        </motion.h1>
      ))}

      {FINAL_MESSAGE.body && (
        <motion.p
          className="final-reveal__body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          {FINAL_MESSAGE.body}
        </motion.p>
      )}
    </div>
  );
}
