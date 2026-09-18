// Chapter 05 — "HOW WELL DO YOU KNOW YOURSELF?"
// Shape per question:
//   question: string
//   options: [string, string, string, string]
//   correctIndex: 0-3
//   feedback: { correct: string, incorrect: string } — optional humor/reaction text
//   image: string | null — optional image path

export const QUIZ_QUESTIONS = [
  {
    id: 'q1',
    question: 'Why is tiny Hansi in jail?',
    options: ['War crimes', 'Tax evasion', 'Drug dealing', 'Involuntary manslaughter'],
    correctIndex: 1,
    feedback: {
      correct: '',
      incorrect: '',
    },
    image: '/photos/quiz/jail.jpg',
  },
  {
    id: 'q2',
    question: 'How many pani puris are in this plate?',
    options: ['22', '26', '19', '31'],
    correctIndex: 1,
    feedback: {
      correct: '',
      incorrect: '',
    },
    image: '/photos/quiz/panipuri.jpg',
  },
  {
    id: 'q3',
    question: 'Where was this photo taken?',
    options: ['Ooty', 'Hyderabad', 'Papikondalu', 'Ananthagiri Hills'],
    correctIndex: 2,
    feedback: {
      correct: '',
      incorrect: '',
    },
    image: '/photos/quiz/papikondalu.jpg',
  },
  {
    id: 'q4',
    question: 'What fruit or vegetable did you eat and put back in the fridge?',
    options: ['Tomato', 'Cucumber', 'Onion', 'Lemon'],
    correctIndex: 0,
    feedback: {
      correct: '',
      incorrect: '',
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
