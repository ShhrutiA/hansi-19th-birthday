// Chapter 05 — "HOW WELL DO YOU KNOW YOURSELF?"
// PLACEHOLDER QUESTIONS ONLY. Do not treat these as real content.
// Replace each entry with real questions/options/answers/feedback when provided.
// Shape per question:
//   question: string
//   options: [string, string, string, string]
//   correctIndex: 0-3
//   feedback: { correct: string, incorrect: string } — optional humor/reaction text
//   image: string | null — optional image path

export const QUIZ_QUESTIONS = [
  {
    id: 'q1',
    question: '[QUIZ QUESTION]',
    options: ['[QUIZ OPTION A]', '[QUIZ OPTION B]', '[QUIZ OPTION C]', '[QUIZ OPTION D]'],
    correctIndex: 0,
    feedback: {
      correct: '[QUIZ FEEDBACK]',
      incorrect: '[QUIZ FEEDBACK]',
    },
    image: null,
  },
  {
    id: 'q2',
    question: '[QUIZ QUESTION]',
    options: ['[QUIZ OPTION A]', '[QUIZ OPTION B]', '[QUIZ OPTION C]', '[QUIZ OPTION D]'],
    correctIndex: 0,
    feedback: {
      correct: '[QUIZ FEEDBACK]',
      incorrect: '[QUIZ FEEDBACK]',
    },
    image: null,
  },
  {
    id: 'q3',
    question: '[QUIZ QUESTION]',
    options: ['[QUIZ OPTION A]', '[QUIZ OPTION B]', '[QUIZ OPTION C]', '[QUIZ OPTION D]'],
    correctIndex: 0,
    feedback: {
      correct: '[QUIZ FEEDBACK]',
      incorrect: '[QUIZ FEEDBACK]',
    },
    image: null,
  },
];

// Result messages — configurable, shown instead of a plain percentage.
export const QUIZ_RESULTS = {
  allCorrect: {
    heading: 'ALRIGHT.',
    body: 'YOU KNOW URSELF HEHE.',
  },
  someWrong: {
    heading: 'WE KNOW YOU BETTER HEHE.',
    body: '',
  },
};
