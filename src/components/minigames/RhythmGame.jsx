import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MiniGameContainer from './MiniGameContainer';
import SuccessScreen from '../shared/SuccessScreen';
import { playNote, playCry } from '../../state/synth';
import './RhythmGame.css';

// "Happy Birthday to You" opening phrase, as note names + relative beat
// lengths. Frequencies are equal-tempered (A4 = 440Hz).
const NOTE_FREQ = {
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23,
  G4: 392.0, A4: 440.0, B4: 493.88, C5: 523.25,
};

const MELODY = [
  { note: 'C4', beats: 0.75 },
  { note: 'C4', beats: 0.25 },
  { note: 'D4', beats: 1 },
  { note: 'C4', beats: 1 },
  { note: 'F4', beats: 1 },
  { note: 'E4', beats: 2 },
];

// Tiles are laid out across 4 lanes, piano-tiles style; each note is
// assigned a lane so consecutive notes visually alternate/fall in sequence.
const LANES = 4;

// After this many missed taps, offer a way to skip ahead rather than leave
// her stuck on one screen.
const SKIP_AFTER_MISSES = 4;

export default function RhythmGame({ onComplete }) {
  const tiles = useMemo(
    () => MELODY.map((m, i) => ({ ...m, id: i, lane: i % LANES })),
    []
  );

  const [hitIndex, setHitIndex] = useState(0);
  const [missedTap, setMissedTap] = useState(false);
  const [missCount, setMissCount] = useState(0);
  const [done, setDone] = useState(false);

  const isCryPhase = hitIndex === 0;

  const handleTileTap = (tile) => {
    if (done) return;
    if (tile.id !== hitIndex) {
      setMissedTap(true);
      setMissCount((c) => c + 1);
      setTimeout(() => setMissedTap(false), 220);
      return;
    }

    if (hitIndex === 0) playCry({ volume: 0.12 });
    playNote(NOTE_FREQ[tile.note], { duration: 0.5 + tile.beats * 0.15, volume: 0.2 });

    const next = hitIndex + 1;
    setHitIndex(next);
    if (next >= tiles.length) {
      setTimeout(() => setDone(true), 700);
    }
  };

  if (done) {
    return (
      <SuccessScreen
        message="A cry became a melody."
        ctaLabel="CONTINUE"
        onContinue={onComplete}
      />
    );
  }

  return (
    <MiniGameContainer
      title="First Sound"
      instructions="Tap the glowing tile, in order. Watch the cry become Happy Birthday."
      showSkip={missCount >= SKIP_AFTER_MISSES}
      onSkip={onComplete}
    >
      <p className="archival-label rhythm-stage-label">
        {isCryPhase ? 'currently: a cry' : hitIndex < tiles.length - 1 ? 'currently: a melody forming' : 'currently: almost there'}
      </p>

      <motion.div
        className="rhythm-board"
        animate={missedTap ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {tiles.map((tile) => {
          const state = tile.id < hitIndex ? 'played' : tile.id === hitIndex ? 'active' : 'pending';
          return (
            <motion.button
              key={tile.id}
              className={`rhythm-tile rhythm-tile--${state}`}
              onClick={() => handleTileTap(tile)}
              whileTap={state !== 'played' ? { scale: 0.92 } : {}}
              aria-label={`note ${tile.id + 1}`}
              disabled={tile.id < hitIndex}
            >
              {state === 'played' && <span className="rhythm-tile__check">✓</span>}
            </motion.button>
          );
        })}
      </motion.div>

      <p className="archival-label rhythm-progress">{hitIndex} / {tiles.length}</p>
    </MiniGameContainer>
  );
}
