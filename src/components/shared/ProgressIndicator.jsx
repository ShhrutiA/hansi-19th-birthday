import { useGameStore } from '../../state/gameStore';
import { TOTAL_CHAPTERS } from '../../content/chapters';
import './ProgressIndicator.css';

export default function ProgressIndicator() {
  const chapterNum = useGameStore((s) => s.currentChapterNumber());
  if (!chapterNum) return null;

  return (
    <div className="progress-indicator">
      <span className="archival-label">HANSI ARCHIVE</span>
      <div className="progress-track">
        {Array.from({ length: TOTAL_CHAPTERS }).map((_, i) => (
          <span
            key={i}
            className={`progress-dot ${i < chapterNum ? 'progress-dot--filled' : ''}`}
          />
        ))}
      </div>
      <span className="archival-label progress-count">
        {String(chapterNum).padStart(2, '0')} / {String(TOTAL_CHAPTERS).padStart(2, '0')}
      </span>
    </div>
  );
}
