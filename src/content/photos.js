// Photo manifest per chapter. Drop real files into /public/photos/<chapter>/
// then set `src` to that path (e.g. '/photos/newborn/photo-1.jpg') to replace
// the placeholder. Metadata powers the MemoryReveal screens.
// DO NOT invent AGE / YEAR / LOCATION values — leave placeholders until provided.
//
// `ambient` is a separate, second photo per chapter used as a soft blurred
// background on the chapter intro screen — use a different candid photo than
// the main one so each chapter shows more than a single repeated picture.

export const CHAPTER_PHOTOS = {
  newborn: {
    src: null, // -> '/photos/newborn/photo-1.jpg'
    placeholderLabel: '[NEWBORN PHOTO]',
    age: '[AGE]',
    year: '[YEAR]',
    location: '[LOCATION]',
    ambient: { src: null, placeholderLabel: '[NEWBORN PHOTO]' }, // -> '/photos/newborn/ambient-1.jpg'
  },
  infant: {
    src: null, // -> '/photos/infant/photo-1.jpg'
    placeholderLabel: '[INFANT PHOTO]',
    age: '[AGE]',
    year: '[YEAR]',
    location: '[LOCATION]',
    ambient: { src: null, placeholderLabel: '[INFANT PHOTO]' }, // -> '/photos/infant/ambient-1.jpg'
  },
  toddler: {
    src: null, // -> '/photos/toddler/photo-1.jpg'
    placeholderLabel: '[TODDLER PHOTO]',
    age: '[AGE]',
    year: '[YEAR]',
    location: '[LOCATION]',
    ambient: { src: null, placeholderLabel: '[TODDLER PHOTO]' }, // -> '/photos/toddler/ambient-1.jpg'
  },
  preschooler: {
    src: null, // -> '/photos/preschooler/photo-1.jpg'
    placeholderLabel: '[PRESCHOOL PHOTO]',
    age: '[AGE]',
    year: '[YEAR]',
    location: '[LOCATION]',
    ambient: { src: null, placeholderLabel: '[PRESCHOOL PHOTO]' }, // -> '/photos/preschooler/ambient-1.jpg'
  },
  child: {
    src: null, // -> '/photos/child/photo-1.jpg'
    placeholderLabel: '[CHILD PHOTO]',
    age: '[AGE]',
    year: '[YEAR]',
    location: '[LOCATION]',
    ambient: { src: null, placeholderLabel: '[CHILD PHOTO]' }, // -> '/photos/child/ambient-1.jpg'
  },
  teen: {
    // Teen has no memory-reveal step (chapter 06 is the cinematic montage instead),
    // but still gets an ambient photo on its own chapter intro screen.
    ambient: { src: null, placeholderLabel: '[TEEN PHOTO]' }, // -> '/photos/teen/ambient-1.jpg'
  },
};

// The single source photograph turned into the jigsaw puzzle (Chapter 04).
export const JIGSAW_PHOTO = {
  src: null, // -> '/photos/jigsaw/puzzle-source.jpg'
  placeholderLabel: '[PRESCHOOL PHOTO]',
  pieceCount: 16, // configurable — try 12 to 20
};

// Teen Hansi cinematic montage — ordered list, easily reorderable/extendable.
export const TEEN_MONTAGE_PHOTOS = [
  { id: 'teen-1', src: null, placeholderLabel: '[TEEN PHOTO]', caption: '' },
  { id: 'teen-2', src: null, placeholderLabel: '[TEEN PHOTO]', caption: '' },
  { id: 'teen-3', src: null, placeholderLabel: '[TEEN PHOTO]', caption: '' },
  { id: 'teen-4', src: null, placeholderLabel: '[TEEN PHOTO]', caption: '' },
  { id: 'teen-5', src: null, placeholderLabel: '[TEEN PHOTO]', caption: '' },
  { id: 'teen-6', src: null, placeholderLabel: '[TEEN PHOTO]', caption: '' },
];
