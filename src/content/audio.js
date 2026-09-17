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
  rhythm: {
    // Newborn rhythm game — cry texture progressing toward the melody.
    cry: '/audio/chapters/rhythm-cry.mp3',
    tones: [
      '/audio/chapters/rhythm-tone-1.mp3',
      '/audio/chapters/rhythm-tone-2.mp3',
      '/audio/chapters/rhythm-tone-3.mp3',
      '/audio/chapters/rhythm-tone-4.mp3',
      '/audio/chapters/rhythm-tone-5.mp3',
    ],
    melody: '/audio/chapters/rhythm-melody.mp3',
  },
  montage: {
    song: '/audio/montage/teen-song.mp3',
    placeholderLabel: '[TEEN SONG]',
  },
};
