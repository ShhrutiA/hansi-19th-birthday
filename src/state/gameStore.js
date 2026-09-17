import { create } from 'zustand';

// Linear stage sequence — mirrors the flow diagram in the brief §1.
// GameFlow.jsx renders based on `stage`; advancing is the only way forward.
export const STAGES = [
  'opening',
  'ch-newborn', 'game-rhythm', 'reveal-newborn',
  'ch-infant', 'game-walking', 'reveal-infant',
  'ch-toddler', 'game-memory', 'reveal-toddler',
  'ch-preschooler', 'game-jigsaw', 'reveal-preschooler',
  'ch-child', 'quiz',
  'ch-teen', 'montage',
  'wall-intro', 'photo-wall',
  'letter-intro', 'letter',
  'final',
];

const initialCompletion = {
  rhythm: false,
  walking: false,
  memory: false,
  jigsaw: false,
  quiz: false,
};

export const useGameStore = create((set, get) => ({
  stageIndex: 0,
  stage: STAGES[0],

  completion: { ...initialCompletion },

  quizAnswers: {}, // { [questionId]: selectedIndex }
  quizScore: 0,

  clickedPhotoIds: [], // memory wall

  audio: {
    muted: false,
  },

  goToStage: (stageId) => {
    const idx = STAGES.indexOf(stageId);
    if (idx === -1) return;
    set({ stageIndex: idx, stage: stageId });
  },

  advance: () => {
    const next = get().stageIndex + 1;
    if (next >= STAGES.length) return;
    set({ stageIndex: next, stage: STAGES[next] });
  },

  completeGame: (key) => {
    set((s) => ({ completion: { ...s.completion, [key]: true } }));
  },

  submitQuizAnswer: (questionId, index) => {
    set((s) => ({ quizAnswers: { ...s.quizAnswers, [questionId]: index } }));
  },

  setQuizScore: (score) => set({ quizScore: score }),

  clickPhoto: (id) => {
    set((s) =>
      s.clickedPhotoIds.includes(id)
        ? s
        : { clickedPhotoIds: [...s.clickedPhotoIds, id] }
    );
  },

  toggleMute: () => set((s) => ({ audio: { ...s.audio, muted: !s.audio.muted } })),

  currentChapterNumber: () => {
    const { stage } = get();
    if (stage.startsWith('ch-') || stage.startsWith('game-') || stage.startsWith('reveal-') || stage === 'quiz' || stage === 'montage') {
      const map = {
        'ch-newborn': 1, 'game-rhythm': 1, 'reveal-newborn': 1,
        'ch-infant': 2, 'game-walking': 2, 'reveal-infant': 2,
        'ch-toddler': 3, 'game-memory': 3, 'reveal-toddler': 3,
        'ch-preschooler': 4, 'game-jigsaw': 4, 'reveal-preschooler': 4,
        'ch-child': 5, 'quiz': 5,
        'ch-teen': 6, 'montage': 6,
      };
      return map[stage] ?? null;
    }
    return null;
  },
}));
