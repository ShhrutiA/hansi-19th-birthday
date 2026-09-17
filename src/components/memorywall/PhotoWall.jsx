import { motion } from 'framer-motion';
import { MEMORY_WALL_PHOTOS } from '../../content/memoryWall';
import { useGameStore } from '../../state/gameStore';
import PhotoFlip from './PhotoFlip';
import Button from '../shared/Button';
import { usePlaySfx } from '../../state/useAudio';
import { AUDIO } from '../../content/audio';
import './PhotoWall.css';

// Slight alternating rotation per tile for an organic, non-grid feel.
const ROTATIONS = [-3, 2, -1.5, 3, -2.5, 1.5];

export default function PhotoWall({ onComplete }) {
  const clickedPhotoIds = useGameStore((s) => s.clickedPhotoIds);
  const clickPhoto = useGameStore((s) => s.clickPhoto);
  const playSfx = usePlaySfx();

  const foundCount = clickedPhotoIds.length;
  const total = MEMORY_WALL_PHOTOS.length;
  const allFound = foundCount === total;

  const handleClick = (id) => {
    if (!clickedPhotoIds.includes(id)) playSfx(AUDIO.sfx.cardFlip, { volume: 0.4 });
    clickPhoto(id);
  };

  return (
    <div className="photo-wall screen-center">
      <span className="archival-label">CLICK ON THE PHOTOS.</span>
      <p className="photo-wall__hint">They have something to tell you.</p>

      <div className="photo-wall__grid">
        {MEMORY_WALL_PHOTOS.map((photo, i) => (
          <div key={photo.id} className="photo-wall__tile">
            <PhotoFlip
              photo={photo}
              isClicked={clickedPhotoIds.includes(photo.id)}
              onClick={() => handleClick(photo.id)}
              rotation={ROTATIONS[i % ROTATIONS.length]}
            />
          </div>
        ))}
      </div>

      <p className="archival-label photo-wall__counter">MEMORIES FOUND: {foundCount} / {total}</p>

      {allFound && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Button onClick={onComplete}>CONTINUE</Button>
        </motion.div>
      )}
    </div>
  );
}
