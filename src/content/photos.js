// Photo manifest per chapter. Drop real files into /public/photos/<chapter>/
// then set `src` to that path (e.g. '/photos/newborn/photo-1.jpg') to replace
// the placeholder. Used by each chapter's "MEMORY UNLOCKED" reveal screen.
//
// `ambient` is a separate, second photo per chapter used as a soft blurred
// background on the chapter intro screen — use a different candid photo than
// the main one so each chapter shows more than a single repeated picture.

export const CHAPTER_PHOTOS = {
  newborn: {
    src: '/photos/newborn/photo-2.jpg',
    placeholderLabel: '[NEWBORN PHOTO]',
    ambient: { src: null, placeholderLabel: '[NEWBORN PHOTO]' }, // -> '/photos/newborn/ambient-1.jpg'
  },
  infant: {
    src: '/photos/infant/photo-1.jpg',
    placeholderLabel: '[INFANT PHOTO]',
    ambient: { src: null, placeholderLabel: '[INFANT PHOTO]' }, // -> '/photos/infant/ambient-1.jpg'
  },
  toddler: {
    src: '/photos/toddler/photo-1.jpg',
    placeholderLabel: '[TODDLER PHOTO]',
    ambient: { src: '/photos/toddler/ambient-1.jpg', placeholderLabel: '[TODDLER PHOTO]' },
  },
  preschooler: {
    src: '/photos/preschooler/photo-1.jpg',
    placeholderLabel: '[PRESCHOOL PHOTO]',
    ambient: { src: null, placeholderLabel: '[PRESCHOOL PHOTO]' }, // -> '/photos/preschooler/ambient-1.jpg'
  },
  child: {
    src: '/photos/child/photo-1.jpg',
    placeholderLabel: '[CHILD PHOTO]',
    ambient: { src: '/photos/child/ambient-1.jpg', placeholderLabel: '[CHILD PHOTO]' },
  },
  teen: {
    // Teen has no memory-reveal step — its chapter intro goes straight into
    // the Photo Wall — but still gets an ambient photo on its intro screen.
    ambient: { src: null, placeholderLabel: '[TEEN PHOTO]' }, // -> '/photos/teen/ambient-1.jpg'
  },
};

// The opening sequence's own photo ("Every story starts somewhere."),
// separate from the Newborn chapter's memory-reveal photo above.
export const OPENING_PHOTO = {
  src: '/photos/newborn/photo-1.jpg',
  placeholderLabel: '[NEWBORN PHOTO]',
};

// The single source photograph turned into the jigsaw puzzle (Chapter 04).
export const JIGSAW_PHOTO = {
  src: '/photos/jigsaw/puzzle-source.jpg',
  placeholderLabel: '[PRESCHOOL PHOTO]',
  pieceCount: 16, // configurable — try 12 to 20
};

// Unused for now — the cinematic montage chapter was removed, so Teen goes
// straight from its chapter intro to the Photo Wall. These 4 photos
// (public/photos/teen/photo-1.jpg through photo-4.jpg) are still on disk
// in case they get used elsewhere later (e.g. added to the Photo Wall).
