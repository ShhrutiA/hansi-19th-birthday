import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import MiniGameContainer from './MiniGameContainer';
import SuccessScreen from '../shared/SuccessScreen';
import { usePlaySfx } from '../../state/useAudio';
import { AUDIO } from '../../content/audio';
import { JIGSAW_PHOTO } from '../../content/photos';
import './JigsawPuzzle.css';

const MAX_BOARD_SIZE = 360; // px, square board on larger viewports
const BOARD_VIEWPORT_MARGIN = 64; // px of horizontal breathing room to preserve
const SNAP_TOLERANCE = 22; // px

// After this many drags that didn't snap into place, offer a way to skip
// ahead rather than leave her stuck on one screen.
const SKIP_AFTER_MISSES = 10;

// The board is sized in JS (never CSS-scaled) so Framer Motion's drag deltas
// — computed in real logical pixels — always match what the pointer does on
// screen. A CSS `transform: scale()` on the board would desync the two.
function useBoardSize() {
  const [size, setSize] = useState(MAX_BOARD_SIZE);
  useEffect(() => {
    const compute = () => {
      const available = window.innerWidth - BOARD_VIEWPORT_MARGIN;
      setSize(Math.max(220, Math.min(MAX_BOARD_SIZE, available)));
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);
  return size;
}

function buildPieces(cols, rows, boardSize) {
  const pieces = [];
  const w = boardSize / cols;
  const h = boardSize / rows;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      pieces.push({
        id: `${row}-${col}`,
        col,
        row,
        correctX: col * w,
        correctY: row * h,
        w,
        h,
      });
    }
  }
  return pieces;
}

// Scatter starting positions around the board, avoiding the solved layout.
function scatterPosition(index, total, boardSize) {
  const angle = (index / total) * Math.PI * 2;
  const radius = boardSize * 0.85;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
}

export default function JigsawPuzzle({ onComplete, pieceCount = JIGSAW_PHOTO.pieceCount }) {
  const boardSize = useBoardSize();
  // Find the cols x rows grid closest to square that multiplies out to
  // exactly pieceCount, so the configured count and the actual grid always
  // match (a rounded sqrt-based guess can silently produce a different total).
  const cols = useMemo(() => {
    for (let c = Math.round(Math.sqrt(pieceCount)); c >= 1; c -= 1) {
      if (pieceCount % c === 0) return c;
    }
    return 1;
  }, [pieceCount]);
  const rows = pieceCount / cols;
  const pieces = useMemo(() => buildPieces(cols, rows, boardSize), [cols, rows, boardSize]);
  const total = pieces.length;

  const [placed, setPlaced] = useState(() => new Set());
  const [positions, setPositions] = useState(() =>
    Object.fromEntries(pieces.map((p, i) => [p.id, scatterPosition(i, total, boardSize)]))
  );
  const [missCount, setMissCount] = useState(0);
  const playSfx = usePlaySfx();

  const isComplete = placed.size === total;

  const handleDragEnd = (piece, info) => {
    const target = positions[piece.id];
    const finalX = target.x + info.offset.x;
    const finalY = target.y + info.offset.y;
    const dx = Math.abs(finalX - 0);
    const dy = Math.abs(finalY - 0);

    if (dx < SNAP_TOLERANCE && dy < SNAP_TOLERANCE) {
      playSfx(AUDIO.sfx.puzzleSnap, { volume: 0.5 });
      setPositions((p) => ({ ...p, [piece.id]: { x: 0, y: 0 } }));
      setPlaced((prev) => {
        const next = new Set(prev);
        next.add(piece.id);
        if (next.size === total) {
          setTimeout(() => playSfx(AUDIO.sfx.puzzleComplete, { volume: 0.6 }), 150);
        }
        return next;
      });
    } else {
      setMissCount((c) => c + 1);
      setPositions((p) => ({ ...p, [piece.id]: { x: finalX, y: finalY } }));
    }
  };

  if (isComplete) {
    return (
      <SuccessScreen
        message="MEMORY UNLOCKED"
        ctaLabel="CONTINUE"
        onContinue={onComplete}
      />
    );
  }

  return (
    <MiniGameContainer
      title="Piece It Together"
      instructions="Drag each piece into place to rebuild the photograph."
      showSkip={missCount >= SKIP_AFTER_MISSES}
      onSkip={onComplete}
    >
      <div className="jigsaw-board" style={{ width: boardSize, height: boardSize }}>
        {!JIGSAW_PHOTO.src && (
          <div className="jigsaw-board__placeholder archival-label">{JIGSAW_PHOTO.placeholderLabel}</div>
        )}
        {pieces.map((piece) => {
          const isPlaced = placed.has(piece.id);
          const pos = positions[piece.id];
          return (
            <motion.div
              key={piece.id}
              className="jigsaw-piece"
              drag={!isPlaced}
              dragMomentum={false}
              dragElastic={0.15}
              onDragEnd={(_, info) => handleDragEnd(piece, info)}
              animate={{ x: pos.x, y: pos.y }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              style={{
                position: 'absolute',
                left: piece.correctX,
                top: piece.correctY,
                width: piece.w,
                height: piece.h,
                backgroundImage: JIGSAW_PHOTO.src ? `url(${JIGSAW_PHOTO.src})` : undefined,
                backgroundSize: `${boardSize}px ${boardSize}px`,
                backgroundPosition: `-${piece.correctX}px -${piece.correctY}px`,
                zIndex: isPlaced ? 1 : 10,
                cursor: isPlaced ? 'default' : 'grab',
              }}
            />
          );
        })}
      </div>
      <p className="archival-label jigsaw-progress">{placed.size} / {total} PIECES PLACED</p>
    </MiniGameContainer>
  );
}
