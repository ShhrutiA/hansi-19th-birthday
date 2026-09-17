# The Hansi Archive

An interactive birthday game/experience for Hansi's 19th birthday — six chapters covering her life from newborn to teen, each with a mini-game, plus a personalized quiz, a cinematic photo montage, a clickable memory wall, a personal letter, and a final reveal.

Full creative brief: [`Hansi Birthday Game — Final Master Build Prompt.md`](./Hansi%20Birthday%20Game%20%E2%80%94%20Final%20Master%20Build%20Prompt.md).

## Running it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

To build a production/static version:

```bash
npm run build
npm run preview
```

## Where to add real content

All personal content (photos, quiz questions, messages, the letter, music) lives in `src/content/` and `public/`, separate from the UI code. Everything is currently placeholder text/images so the whole experience is playable end-to-end without any real assets.

- **Photos** — drop files into `public/photos/<chapter>/` (`newborn`, `infant`, `toddler`, `preschooler`, `child`, `teen`, `jigsaw`, `memory-wall`), then update the matching `src` field in `src/content/photos.js` or `src/content/memoryWall.js` from `null` to the file path.
- **Quiz questions** — `src/content/quiz.js`.
- **Memory wall messages** — `src/content/memoryWall.js`.
- **The letter** — `src/content/letter.js`.
- **Final birthday message** — `src/content/finalMessage.js`.
- **Audio** — drop files into `public/audio/...` and reference them in `src/content/audio.js`.

## Project structure

- `src/flow/GameFlow.jsx` — the main state machine driving the whole experience (opening → chapters → mini-games → quiz → montage → memory wall → letter → final reveal).
- `src/components/minigames/` — the four mini-games (rhythm tap, walking, memory match, jigsaw puzzle).
- `src/components/shared/` — reusable pieces (buttons, chapter intros, photo frames, transitions, etc).
- `src/state/gameStore.js` — global game state (zustand).
- `src/styles/tokens.css` — the color palette, which shifts subtly per chapter as Hansi grows up.

## Working together

Feel free to branch and open PRs, or just push to `main` if that's easier for two people — whatever's simplest. Ping the other person before touching `src/content/` files so you don't overwrite each other's placeholder content edits.
