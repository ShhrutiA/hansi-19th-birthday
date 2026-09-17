import { motion } from 'framer-motion';
import { useGameStore } from '../../state/gameStore';
import './AudioController.css';

export default function AudioController() {
  const muted = useGameStore((s) => s.audio.muted);
  const toggleMute = useGameStore((s) => s.toggleMute);

  return (
    <motion.button
      className="audio-controller"
      onClick={toggleMute}
      whileTap={{ scale: 0.9 }}
      aria-label={muted ? 'Unmute audio' : 'Mute audio'}
    >
      {muted ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 9v6h4l5 5V4L8 9H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M17 8l5 8M22 8l-5 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 9v6h4l5 5V4L8 9H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M16.5 9a4 4 0 010 6M19 6.5a8 8 0 010 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
      )}
    </motion.button>
  );
}
