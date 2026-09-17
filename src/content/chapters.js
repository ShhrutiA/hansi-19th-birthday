// Chapter metadata driving titles, archival labels, and palette per chapter.
// Palette keys reference custom properties defined in src/styles/tokens.css
export const CHAPTERS = [
  {
    id: 'newborn',
    index: 1,
    code: 'ARCHIVE_01',
    title: 'NEWBORN',
    subtitle: 'The beginning of everything.',
    age: 0,
    palette: 'newborn',
  },
  {
    id: 'infant',
    index: 2,
    code: 'ARCHIVE_02',
    title: 'INFANT',
    subtitle: 'Wobbling into the world.',
    age: 1,
    palette: 'infant',
  },
  {
    id: 'toddler',
    index: 3,
    code: 'ARCHIVE_03',
    title: 'TODDLER',
    subtitle: 'Curious about everything.',
    age: 2,
    palette: 'toddler',
  },
  {
    id: 'preschooler',
    index: 4,
    code: 'ARCHIVE_04',
    title: 'PRESCHOOLER',
    subtitle: 'Piecing the world together.',
    age: 4,
    palette: 'preschooler',
  },
  {
    id: 'child',
    index: 5,
    code: 'ARCHIVE_05',
    title: 'CHILD',
    subtitle: 'How well do you know yourself?',
    age: 8,
    palette: 'child',
  },
  {
    id: 'teen',
    index: 6,
    code: 'ARCHIVE_06',
    title: 'TEEN HANSI',
    subtitle: 'Growing into who she is.',
    age: 15,
    palette: 'teen',
  },
];

export const TOTAL_CHAPTERS = CHAPTERS.length;

export const getChapter = (id) => CHAPTERS.find((c) => c.id === id);
