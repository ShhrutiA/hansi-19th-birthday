// Audio manifest. Drop files into /public/audio/... and reference them here.
// All entries are optional — AudioController and Howler calls no-op safely
// when a src is missing or fails to load (browser 404 is silently caught).

export const AUDIO = {
  chapters: {
    newborn: '/audio/chapters/newborn.mp3',
    infant: '/audio/chapters/infant.mp3',
    toddler: '/audio/chapters/toddler.mp3',
    preschooler: '/audio/chapters/preschooler.mp3',
    child: '/audio/chapters/child.mp3',
    teen: '/audio/chapters/teen.mp3',
  },
  sfx: {
    click: '/audio/sfx/click.mp3',
    cardFlip: '/audio/sfx/card-flip.mp3',
    match: '/audio/sfx/match.mp3',
    mismatch: '/audio/sfx/mismatch.mp3',
    puzzleSnap: '/audio/sfx/puzzle-snap.mp3',
    puzzleComplete: '/audio/sfx/puzzle-complete.mp3',
    transition: '/audio/sfx/transition.mp3',
    reveal: '/audio/sfx/reveal.mp3',
    tap: '/audio/sfx/tap.mp3',
  },
  // Plays continuously from the Photo Wall through to the Final Reveal —
  // the ending's one continuous soundtrack.
  ending: '/audio/ending/finale.m4a',
};
