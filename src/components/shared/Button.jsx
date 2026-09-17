import { motion } from 'framer-motion';
import './Button.css';

export default function Button({ children, onClick, variant = 'primary', disabled = false, ...rest }) {
  return (
    <motion.button
      className={`archive-btn archive-btn--${variant}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { y: -2, scale: 1.015 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
