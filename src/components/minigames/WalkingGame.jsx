import { useState } from 'react';
import { motion } from 'framer-motion';
import MiniGameContainer from './MiniGameContainer';
import SuccessScreen from '../shared/SuccessScreen';
import { usePlaySfx } from '../../state/useAudio';
import { AUDIO } from '../../content/audio';
import './WalkingGame.css';

const STEPS = ['stand', 'wobble', 'first step', 'second step', 'walking'];

export default function WalkingGame({ onComplete }) {
  const [stepIndex, setStepIndex] = useState(0);
  const playSfx = usePlaySfx();

  const isDone = stepIndex >= STEPS.length - 1;

  const handleTap = () => {
    if (isDone) return;
    playSfx(AUDIO.sfx.tap, { volume: 0.5 });
    setStepIndex((i) => Math.min(STEPS.length - 1, i + 1));
  };

  if (isDone) {
    return (
      <SuccessScreen
        message="First steps, taken."
        ctaLabel="CONTINUE"
        onContinue={onComplete}
      />
    );
  }

  return (
    <MiniGameContainer
      title="First Steps"
      instructions="Tap to help Hansi take each step."
    >
      <div className="walking-figure" aria-hidden>
        <motion.div
          key={stepIndex}
          className="walking-figure__body"
          initial={{ rotate: -4, y: -3 }}
          animate={{ rotate: 0, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 14 }}
        />
      </div>
      <p className="archival-label walking-step-label">{STEPS[stepIndex]}</p>
      <button className="archive-btn archive-btn--accent" onClick={handleTap}>
        TAP
      </button>
    </MiniGameContainer>
  );
}
