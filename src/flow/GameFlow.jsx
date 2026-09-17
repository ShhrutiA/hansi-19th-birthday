import { AnimatePresence } from 'framer-motion';
import { useGameStore } from '../state/gameStore';
import { CHAPTERS, getChapter } from '../content/chapters';
import { CHAPTER_PHOTOS } from '../content/photos';

import ChapterTransition from '../components/shared/ChapterTransition';
import ChapterIntro from '../components/shared/ChapterIntro';
import MemoryReveal from '../components/shared/MemoryReveal';
import ProgressIndicator from '../components/shared/ProgressIndicator';
import AudioController from '../components/shared/AudioController';

import OpeningSequence from '../components/opening/OpeningSequence';
import RhythmGame from '../components/minigames/RhythmGame';
import WalkingGame from '../components/minigames/WalkingGame';
import MemoryGame from '../components/minigames/MemoryGame';
import JigsawPuzzle from '../components/minigames/JigsawPuzzle';
import Quiz from '../components/quiz/Quiz';
import TeenMontage from '../components/montage/TeenMontage';
import PhotoWall from '../components/memorywall/PhotoWall';
import LetterScreen from '../components/letter/LetterScreen';
import FinalReveal from '../components/final/FinalReveal';

import WallIntro from './WallIntro';
import LetterIntro from './LetterIntro';

const CHAPTER_REVEAL_MAP = {
  'reveal-newborn': 'newborn',
  'reveal-infant': 'infant',
  'reveal-toddler': 'toddler',
  'reveal-preschooler': 'preschooler',
};

// Merge a chapter's static metadata with its ambient background photo.
function chapterWithAmbient(id) {
  return { ...getChapter(id), ambient: CHAPTER_PHOTOS[id]?.ambient };
}

export default function GameFlow() {
  const stage = useGameStore((s) => s.stage);
  const advance = useGameStore((s) => s.advance);
  const completeGame = useGameStore((s) => s.completeGame);
  const chapterNum = useGameStore((s) => s.currentChapterNumber());

  const activeChapter = chapterNum ? CHAPTERS[chapterNum - 1] : null;

  const renderStage = () => {
    switch (stage) {
      case 'opening':
        return <OpeningSequence onContinue={advance} />;

      case 'ch-newborn':
        return <ChapterIntro chapter={chapterWithAmbient('newborn')} onContinue={advance} ctaLabel="BEGIN" />;
      case 'game-rhythm':
        return <RhythmGame onComplete={() => { completeGame('rhythm'); advance(); }} />;

      case 'ch-infant':
        return <ChapterIntro chapter={chapterWithAmbient('infant')} onContinue={advance} ctaLabel="BEGIN" />;
      case 'game-walking':
        return <WalkingGame onComplete={() => { completeGame('walking'); advance(); }} />;

      case 'ch-toddler':
        return <ChapterIntro chapter={chapterWithAmbient('toddler')} onContinue={advance} ctaLabel="BEGIN" />;
      case 'game-memory':
        return <MemoryGame onComplete={() => { completeGame('memory'); advance(); }} />;

      case 'ch-preschooler':
        return <ChapterIntro chapter={chapterWithAmbient('preschooler')} onContinue={advance} ctaLabel="BEGIN" />;
      case 'game-jigsaw':
        return <JigsawPuzzle onComplete={() => { completeGame('jigsaw'); advance(); }} />;

      case 'reveal-newborn':
      case 'reveal-infant':
      case 'reveal-toddler':
      case 'reveal-preschooler': {
        const key = CHAPTER_REVEAL_MAP[stage];
        return <MemoryReveal photo={CHAPTER_PHOTOS[key]} onContinue={advance} />;
      }

      case 'ch-child':
        return <ChapterIntro chapter={chapterWithAmbient('child')} onContinue={advance} ctaLabel="BEGIN" />;
      case 'quiz':
        return (
          <Quiz
            onComplete={(score) => {
              completeGame('quiz');
              useGameStore.getState().setQuizScore(score);
              advance();
            }}
          />
        );

      case 'ch-teen':
        return <ChapterIntro chapter={chapterWithAmbient('teen')} onContinue={advance} ctaLabel="BEGIN" />;
      case 'montage':
        return <TeenMontage onComplete={advance} />;

      case 'wall-intro':
        return <WallIntro onContinue={advance} />;
      case 'photo-wall':
        return <PhotoWall onComplete={advance} />;

      case 'letter-intro':
        return <LetterIntro onDone={advance} />;
      case 'letter':
        return <LetterScreen onComplete={advance} />;

      case 'final':
        return <FinalReveal />;

      default:
        return null;
    }
  };

  return (
    <div className="app-shell grain" data-chapter={activeChapter?.palette ?? 'newborn'}>
      {stage !== 'opening' && stage !== 'final' && <ProgressIndicator />}
      <AudioController />
      <AnimatePresence mode="wait">
        <ChapterTransition stageKey={stage}>{renderStage()}</ChapterTransition>
      </AnimatePresence>
    </div>
  );
}
