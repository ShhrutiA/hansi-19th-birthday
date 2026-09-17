import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import MiniGameContainer from './MiniGameContainer';
import SuccessScreen from '../shared/SuccessScreen';
import { usePlaySfx } from '../../state/useAudio';
import { AUDIO } from '../../content/audio';
import './MemoryGame.css';

// Placeholder card faces — swap for real childhood-themed images/icons later.
const SYMBOLS = ['◆', '●', '▲', '■', '✦', '❖'];

function shuffledDeck() {
  const pairs = [...SYMBOLS, ...SYMBOLS].map((symbol, i) => ({
    id: `${symbol}-${i}`,
    symbol,
  }));
  for (let i = pairs.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
  }
  return pairs;
}

// After this many mismatched pairs, offer a way to skip ahead rather than
// leave her stuck on one screen.
const SKIP_AFTER_MISSES = 5;

export default function MemoryGame({ onComplete }) {
  const [deck] = useState(shuffledDeck);
  const [flipped, setFlipped] = useState([]); // indices currently face-up, unmatched
  const [matched, setMatched] = useState(new Set());
  const [busy, setBusy] = useState(false);
  const [missCount, setMissCount] = useState(0);
  const playSfx = usePlaySfx();

  const isComplete = matched.size === deck.length;

  const handleFlip = (index) => {
    if (busy || flipped.includes(index) || matched.has(index)) return;
    playSfx(AUDIO.sfx.cardFlip, { volume: 0.4 });

    const next = [...flipped, index];
    setFlipped(next);

    if (next.length === 2) {
      setBusy(true);
      const [a, b] = next;
      const isMatch = deck[a].symbol === deck[b].symbol;
      setTimeout(() => {
        if (isMatch) {
          playSfx(AUDIO.sfx.match, { volume: 0.5 });
          setMatched((m) => new Set([...m, a, b]));
        } else {
          playSfx(AUDIO.sfx.mismatch, { volume: 0.4 });
          setMissCount((c) => c + 1);
        }
        setFlipped([]);
        setBusy(false);
      }, 700);
    }
  };

  if (isComplete) {
    return (
      <SuccessScreen
        message="Every pair, remembered."
        ctaLabel="CONTINUE"
        onContinue={onComplete}
      />
    );
  }

  return (
    <MiniGameContainer
      title="Match the Memories"
      instructions="Flip two cards at a time to find every pair."
      showSkip={missCount >= SKIP_AFTER_MISSES}
      onSkip={onComplete}
    >
      <div className="memory-grid">
        {deck.map((card, index) => {
          const isFaceUp = flipped.includes(index) || matched.has(index);
          return (
            <button
              key={card.id}
              className="memory-card"
              onClick={() => handleFlip(index)}
              aria-label={isFaceUp ? card.symbol : 'hidden card'}
            >
              <motion.div
                className="memory-card__inner"
                animate={{ rotateY: isFaceUp ? 180 : 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="memory-card__face memory-card__face--back" />
                <div className="memory-card__face memory-card__face--front">{card.symbol}</div>
              </motion.div>
            </button>
          );
        })}
      </div>
    </MiniGameContainer>
  );
}
