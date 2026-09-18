import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUIZ_QUESTIONS, QUIZ_RESULTS } from '../../content/quiz';
import Button from '../shared/Button';
import './Quiz.css';

export default function Quiz({ onComplete }) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const question = QUIZ_QUESTIONS[step];
  const isLast = step === QUIZ_QUESTIONS.length - 1;

  const handleSelect = (index) => {
    if (revealed) return;
    setSelected(index);
    setRevealed(true);
    if (index === question.correctIndex) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (isLast) {
      setDone(true);
      return;
    }
    setStep((s) => s + 1);
    setSelected(null);
    setRevealed(false);
  };

  if (done) {
    const allCorrect = score === QUIZ_QUESTIONS.length;
    const result = allCorrect ? QUIZ_RESULTS.allCorrect : QUIZ_RESULTS.someWrong;
    return (
      <motion.div
        className="screen-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="archival-label">SCORE: {score} / {QUIZ_QUESTIONS.length}</span>
        <h2 className="display-title quiz-result__heading">{result.heading}</h2>
        {result.body && <p className="quiz-result__body">{result.body}</p>}
        <Button onClick={() => onComplete(score)}>CONTINUE</Button>
      </motion.div>
    );
  }

  return (
    <div className="quiz screen-center">
      <span className="archival-label">HOW WELL DO YOU KNOW YOURSELF?</span>
      <span className="archival-label quiz__progress">QUESTION {step + 1} / {QUIZ_QUESTIONS.length}</span>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          className="quiz__card"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {question.image && <img src={question.image} alt="" className="quiz__image" />}
          <h3 className="display-title quiz__question">{question.question}</h3>

          <div className="quiz__options">
            {question.options.map((option, index) => {
              const isCorrect = index === question.correctIndex;
              const isSelected = index === selected;
              let stateClass = '';
              if (revealed && isSelected) stateClass = isCorrect ? 'quiz__option--correct' : 'quiz__option--wrong';
              else if (revealed && isCorrect) stateClass = 'quiz__option--correct';

              return (
                <button
                  key={index}
                  className={`quiz__option ${stateClass}`}
                  onClick={() => handleSelect(index)}
                  disabled={revealed}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {revealed && (selected === question.correctIndex ? question.feedback.correct : question.feedback.incorrect) && (
            <motion.p
              className="quiz__feedback"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {selected === question.correctIndex ? question.feedback.correct : question.feedback.incorrect}
            </motion.p>
          )}

          {revealed && (
            <Button onClick={handleNext}>{isLast ? 'SEE RESULT' : 'NEXT'}</Button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
