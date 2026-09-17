# HANSI — THE INTERACTIVE LIFE ARCHIVE

Build a highly polished, cinematic, interactive birthday game for my friend Hansi.

This is a personalized experience that takes the player through different stages of Hansi's life, from newborn to teenager.

This is NOT a birthday landing page, scrapbook template, portfolio, or generic birthday website.

It should feel like a small, premium indie game / interactive digital memory book made specifically for one person.

The experience should combine:

**cinematic storytelling + mini-games + childhood memories + photographs + music + humor + a heartfelt ending.**

I will provide the actual photographs, music, quiz questions, personal messages, letter, and other Hansi-specific content separately.

**DO NOT invent or assume any of the personal content.**

Build the application and content architecture so that I can provide these assets later and insert them cleanly.

---

# 1. OVERALL EXPERIENCE

The player progresses through six chapters:

1. NEWBORN
2. INFANT
3. TODDLER
4. PRESCHOOLER
5. CHILD
6. TEEN HANSI

Each chapter represents a different stage of Hansi's life.

The first four chapters contain interactive mini-games/activities.

The fifth chapter contains a funny personalized MCQ quiz.

The sixth chapter is a cinematic photo-and-music experience rather than a game.

After the six chapters, there is a final interactive memory section where the player clicks photographs to reveal personal messages.

This leads into a personal letter and finally the birthday reveal.

The complete flow is:

OPENING
↓
CHAPTER 01 — NEWBORN
↓
RHYTHM MINI-GAME
↓
MEMORY REVEAL
↓
CHAPTER 02 — INFANT
↓
WALKING TIMING GAME
↓
MEMORY REVEAL
↓
CHAPTER 03 — TODDLER
↓
MEMORY MATCHING GAME
↓
MEMORY REVEAL
↓
CHAPTER 04 — PRESCHOOLER
↓
PHOTO JIGSAW PUZZLE
↓
MEMORY REVEAL
↓
CHAPTER 05 — CHILD
↓
FUNNY MCQ QUIZ
↓
QUIZ RESULT
↓
CHAPTER 06 — TEEN HANSI
↓
CINEMATIC PHOTO + MUSIC SEQUENCE
↓
INTERACTIVE MEMORY WALL
↓
CLICKABLE PHOTO MESSAGES
↓
PERSONAL LETTER
↓
FINAL BIRTHDAY REVEAL

The player should progress through the story rather than freely skipping chapters.

---

# 2. CORE DESIGN PHILOSOPHY

The most important requirement:

## THIS MUST NOT LOOK LIKE A GENERIC BIRTHDAY WEBSITE.

Avoid:

- generic birthday templates
- balloons everywhere
- excessive hearts
- rainbow gradients
- generic confetti
- cheesy cursive fonts
- stock illustrations
- generic scrapbook layouts
- standard card grids
- excessive rounded cards
- generic “Happy Birthday!!! 🎉🎂🥳” screens
- random animations with no purpose
- excessive visual clutter

Instead, make it feel like:

**Cinematic Memory Archive × Modern Indie Game × Editorial Design**

The experience should feel:

- personal
- sophisticated
- nostalgic
- playful
- warm
- slightly mysterious
- colourful
- emotionally meaningful
- tactile
- visually cohesive
- extremely polished

Every visual choice should feel intentional.

The goal is for the player to feel:

> “Someone spent an absurd amount of time making this tiny interactive world specifically for Hansi.”

---

# 3. VISUAL LANGUAGE & COLOUR DIRECTION

The visual identity should be **colourful, warm, soft, and playful**, while maintaining a sophisticated natural foundation.

The main inspiration is:

**sage green + warm white/cream + subtle natural wood tones + a soft pastel palette.**

The overall feeling should be like a beautifully curated collection of childhood memories — warm, fresh, natural, colourful, and tactile.

## PRIMARY PALETTE

The dominant colours should be:

- soft sage green
- warm white
- ivory / cream
- very light natural beige
- warm charcoal for typography

The experience should be **mostly green-and-white/cream based**, with subtle pastel colours layered throughout.

## PASTEL ACCENTS

Introduce colour through a restrained pastel palette such as:

- dusty pink
- soft peach
- muted coral
- pale yellow
- powder blue
- lavender
- muted teal
- soft warm orange

These colours should make the childhood chapters feel alive without making the interface loud or childish.

Think:

**pastel colour pops against a calm sage-and-cream world.**

Do NOT use highly saturated neon colours or generic rainbow gradients.

---

# 4. NATURAL / WOODEN FEEL

The “wooden” aspect refers primarily to the **colour palette and warmth**, NOT to turning the website into a wooden environment.

Wood should be an **accent/material**, never the dominant background.

Good uses:

- subtle wooden photo frames
- light wood backing behind a photograph
- small wooden shelf-like elements
- occasional natural-material surfaces
- subtle warm beige/brown details

Avoid:

- full-screen fake wood backgrounds
- repeating wood textures
- making every card look wooden
- excessive brown
- turning the interface into a literal wooden scrapbook

Do NOT use something like:

`background-image: wood-texture.jpg`

across the website.

The result should feel **inspired by natural wood**, not like a wooden website.

The dominant visual impression should remain:

**SAGE GREEN + WARM WHITE + CREAM + SOFT PASTELS.**

---

# 5. COLOUR EVOLUTION THROUGH THE STORY

The palette should subtly evolve as Hansi grows.

### NEWBORN

Cream + pale sage + very soft blue.

Dreamy, gentle and hazy.

### INFANT

Sage + warm yellow + cream.

Playful and soft.

### TODDLER

Sage + peach/coral + powder blue.

More curious and colourful.

### PRESCHOOLER

Sage + pastel yellow + peach + natural cream.

Tactile, playful and imaginative.

### CHILD

Sage + a broader range of soft pastel accents.

Brighter, energetic and humorous.

### TEEN HANSI

Keep the natural foundation, but mature the palette.

Use deeper sage, richer greens, warm cream, charcoal, muted blue/purple and slightly deeper accents.

The visual language should feel like it has **grown up alongside Hansi.**

The exact colours can be adjusted later, but the overall progression should remain cohesive.

---

# 6. MATERIAL / TEXTURE DIRECTION

Subtle tactile qualities are welcome:

- paper grain
- photograph texture
- film grain
- soft shadows
- natural paper/cream surfaces
- subtle wood accents
- slightly imperfect photographic edges

However, keep everything modern.

Do NOT turn the entire experience into a literal scrapbook.

The inspiration should feel like:

**a beautiful memory box translated into a modern digital experience.**

Photographs should always remain the most important visual elements.

---

# 7. TYPOGRAPHY

Use no more than two primary font families.

Preferred direction:

### Display

Instrument Serif OR DM Serif Display

### UI / Body

Inter OR Geist

Use typography heavily as part of the visual identity.

Large chapter titles should feel editorial and cinematic.

Small metadata should feel like archival information.

Examples:

`ARCHIVE_01`

`SUBJECT: HANSI`

`AGE: 0`

`CHAPTER 01`

`NEWBORN`

Do not use decorative fonts excessively.

Typography should feel premium rather than like a birthday invitation.

---

# 8. OPENING SEQUENCE

The opening should feel like the beginning of a film/game.

Start with a nearly black or very dark screen.

Small archival text appears:

`ARCHIVE_01`

Then:

`SUBJECT: HANSI`

Then:

`AGE: 0`

Use subtle animation and sound.

Slowly reveal the first childhood photograph.

Display:

> “Every story starts somewhere.”

Then transition into:

# CHAPTER 01

## NEWBORN

Do NOT start with balloons or a giant birthday greeting.

The actual:

# HAPPY BIRTHDAY, HANSI

reveal is reserved for the very end.

---

# 9. CHAPTER 01 — NEWBORN

TITLE:

CHAPTER 01
NEWBORN

MINI-GAME:

A rhythm/timing game inspired by piano tiles.

Concept:

A baby's crying tone gradually transforms into the melody of Happy Birthday.

The player taps notes/tiles at the correct time.

At the beginning, the sound should feel like a baby's cry.

As the player succeeds:

baby cry
→ individual musical tones
→ recognizable melody
→ Happy Birthday

The final successful sequence should feel like the first musical memory of the story.

The final note should transition beautifully into Chapter 02.

Do not copy the Piano Tiles interface directly.

Use the core timing mechanic as inspiration but create an original visual design consistent with THE HANSI ARCHIVE.

---

# 10. CHAPTER 02 — INFANT

TITLE:

CHAPTER 02
INFANT

MINI-GAME:

Learning to walk.

Create a timing-based game where the player helps Hansi take steps.

The player must press/tap at the right moment to maintain balance.

Progression:

stand
→ wobble
→ first step
→ second step
→ walking

The animation should communicate instability at first and gradually become confident.

Failure should be playful rather than frustrating.

The game should feel cute without becoming childish.

On successful completion, transition naturally into the next chapter.

---

# 11. CHAPTER 03 — TODDLER

TITLE:

CHAPTER 03
TODDLER

MINI-GAME:

Memory matching.

Create a polished memory-card game.

The player flips face-down cards and matches pairs.

The cards can eventually use childhood-related images/assets that I provide.

Interactions should feel tactile:

- realistic card flip
- subtle depth
- satisfying match animation
- small sound effects
- incorrect-match feedback
- completion animation

Do not make this look like a generic educational memory game.

Give it a distinctive visual treatment consistent with THE HANSI ARCHIVE.

---

# 12. CHAPTER 04 — PRESCHOOLER

TITLE:

CHAPTER 04
PRESCHOOLER

MINI-GAME:

PHOTO JIGSAW PUZZLE.

I will provide a childhood photograph.

The application should transform that photograph into a jigsaw puzzle.

The player must reconstruct the photograph.

The puzzle should have:

- draggable pieces
- snapping behavior
- subtle shadows
- tactile movement
- correct-placement feedback
- satisfying completion animation

Start with approximately 12–20 pieces, but make the difficulty configurable.

The architecture should allow the number of pieces to be changed easily.

The puzzle should work well on both desktop and mobile.

When the puzzle is completed:

the pieces should smoothly assemble into the complete photograph.

Then trigger:

`MEMORY UNLOCKED`

and continue to the next chapter.

Do NOT invent the photograph.

I will provide it.

---

# 13. CHAPTER 05 — CHILD

TITLE:

CHAPTER 05
CHILD

MINI-GAME:

A funny, personalized multiple-choice quiz.

Title:

# HOW WELL DO YOU KNOW YOURSELF?

The quiz will consist entirely of questions that **I will provide later**.

IMPORTANT:

**DO NOT INVENT OR GENERATE THE QUIZ QUESTIONS.**

Wait for me to provide:

- question text
- four MCQ options
- correct answer
- optional joke/feedback
- optional image
- any special instructions

Build the quiz engine and UI now, but use placeholders until I provide the actual questions.

The questions must be stored separately from the UI so I can easily replace them.

Each question should support:

- question text
- four options
- correct answer
- optional image
- optional humorous feedback

After every answer, provide polished visual feedback.

The quiz should feel funny and personal, NOT like a school examination.

At the end:

### IF ALL ANSWERS ARE CORRECT:

> ALRIGHT.
>
> YOU KNOW URSELF HEHE.

### IF SHE GETS ANY ANSWERS WRONG:

> WE KNOW YOU BETTER HEHE.

These result messages should remain configurable.

Do not make the result a boring percentage-only screen.

The score can still be tracked internally/displayed subtly, but the primary result should be the humorous personalized message.

---

# 14. CHAPTER 06 — TEEN HANSI

TITLE:

CHAPTER 06
TEEN HANSI

IMPORTANT:

## THIS IS NOT A MINI-GAME.

This chapter is a cinematic photo-and-music experience.

I will provide:

- the photographs
- the song/music
- any captions or text

Do NOT invent these.

Create a cinematic montage using the provided photographs.

The photographs should transition using:

- slow camera movement
- subtle zoom
- layered depth
- film-frame transitions
- crossfades
- photographs sliding into view
- subtle parallax
- occasional faster cuts synchronized to the music

The sequence should feel like a short film rather than a basic slideshow.

The music should drive the pacing where possible.

Possible rhythm:

slow opening
→ individual memories
→ faster sequence
→ emotional/meaningful photograph
→ final montage
→ music softens
→ transition into the final memory section

Allow the timing/order of photographs to be easily changed.

Respect browser autoplay restrictions and provide an elegant interaction to start the music if necessary.

Include a subtle music/audio control.

---

# 15. PHOTO TREATMENT

Throughout the game, photographs are important narrative objects.

Do NOT simply place photographs inside generic cards.

Possible treatments:

- blur → focus
- film-strip appearance
- photograph developing
- subtle archival scan
- layered photographs
- photo zoom
- photo becoming the background
- depth/parallax
- photograph sliding into a frame
- fragments assembling into a photograph

Keep these effects tasteful.

The photograph must remain the emotional and visual focus.

---

# 16. CHAPTER TRANSITIONS

Transitions are one of the most important parts of the entire experience.

Do NOT simply:

fade out
→ load next page
→ fade in.

Instead, make the timeline feel continuous.

Possible transitions:

- zoom through a photograph
- chapter title morphing
- camera travelling across a timeline
- photo expanding to fill the screen
- objects transitioning into the next chapter
- typography transforming
- film-frame movement

The player should feel like they are travelling through Hansi's life rather than navigating separate web pages.

---

# 17. MEMORY REVEALS

After completing relevant chapters, reveal a photograph or memory.

Use:

# MEMORY UNLOCKED

as a recurring concept.

Potential metadata:

`AGE: ___`

`YEAR: ___`

`LOCATION: ___`

All information must be editable.

The memory reveal should feel like a reward for completing the chapter.

---

# 18. FINAL INTERACTIVE MEMORY WALL

After the Teen Hansi cinematic sequence finishes:

Do NOT immediately show the birthday message.

Instead transition into:

> **THE ARCHIVE ISN'T QUITE COMPLETE.**

Then:

> “There are a few things we still wanted to tell you.”

Then clearly display:

# CLICK ON THE PHOTOS.

> *They have something to tell you.*

This instruction must be obvious.

Create a beautiful interactive collection of photographs.

Do NOT make it a boring standard grid.

Arrange the photographs like a curated collection of memories.

The layout should feel organic and editorial.

Each photograph must be clickable.

Unclicked photographs should have a subtle visual cue indicating interactivity.

For example:

- subtle glow
- gentle hover movement
- tiny “click me” indicator
- slight lift
- cursor interaction

Do not make these cues distracting.

---

# 19. CLICKABLE PHOTO FLIP

When the player clicks a photograph:

the photograph should perform a polished 3D flip.

### FRONT:

The photograph.

### BACK:

A short wholesome/personal message.

I will provide the actual messages later.

IMPORTANT:

**DO NOT INVENT THE FINAL PERSONAL MESSAGES.**

Each photograph can have a different message.

Example placeholder only:

> “I hope you always know how loved you are.”

The message should be beautifully centered on the back of the photograph.

Use a subtle paper/card texture if appropriate.

The interaction should feel like discovering a secret message hidden behind an old photograph.

After the player has clicked all required photographs, show:

`MEMORIES FOUND: X / X`

Then transition to the letter.

---

# 20. PERSONAL LETTER

After all photographs have been opened:

Display:

> “You found them all.”

Then:

> “One last thing.”

Transition into a beautiful personal letter.

I will provide the actual letter.

IMPORTANT:

**DO NOT WRITE OR INVENT THE FINAL PERSONAL LETTER.**

Use a placeholder until I provide it.

The letter should feel intimate and personal.

Use elegant typography and incorporate selected photographs into the composition.

Do not make it look like an email.

It should feel like a physical handwritten/personal letter translated into a beautiful digital experience.

At the end:

> With love,
>
> [NAME]

All text must be editable.

---

# 21. FINAL BIRTHDAY REVEAL

Only after the letter should the final birthday message appear.

Use a quiet transition.

Then reveal:

# HAPPY BIRTHDAY,

# HANSI.

Allow an additional short final message underneath.

I will provide the exact final message.

A final photograph can appear underneath or behind the message.

The ending should feel emotional and earned.

Do NOT immediately bombard the screen with confetti.

If celebratory animation is used, keep it subtle, elegant and brief.

The final screen should have enough negative space to let the message land.

---

# 22. ANIMATION SYSTEM

Animations should feel premium and intentional.

Use:

- smooth easing
- spring-based interactions
- subtle scale changes
- opacity transitions
- tactile hover states
- realistic dragging
- 3D card flips
- cinematic transitions
- parallax
- subtle grain
- micro-interactions
- image reveal animations

Avoid:

- excessive bouncing
- random floating elements
- excessive particles
- generic animation presets everywhere
- unnecessarily slow transitions
- animations that interfere with gameplay

Every animation should have a purpose.

---

# 23. AUDIO SYSTEM

Treat audio as an important part of the experience.

Support:

- background music
- chapter-specific audio
- UI sounds
- card flips
- successful matches
- puzzle completion
- transitions
- final reveal

I will provide the relevant music/audio assets.

Make the audio system modular so files can easily be replaced.

Handle browser autoplay restrictions gracefully.

Include a subtle sound/music control.

---

# 24. UI

Keep the UI minimal.

Possible persistent indicator:

`HANSI ARCHIVE`

and:

`03 / 06`

or a subtle timeline.

The player should always know where they are in the story without the UI becoming distracting.

Buttons should feel tactile and premium.

Examples:

`BEGIN`

`CONTINUE`

`TRY AGAIN`

`UNLOCK MEMORY`

Avoid generic birthday-style buttons.

---

# 25. RESPONSIVENESS

The experience must work beautifully on:

- desktop
- laptop
- tablet
- mobile

Mobile is especially important.

Do NOT simply shrink the desktop UI.

Adapt layouts intentionally for touch.

Ensure:

- puzzle pieces can be dragged comfortably
- cards can be flipped comfortably
- buttons are touch-friendly
- text remains readable
- photographs retain their visual impact
- cinematic sequences work at different aspect ratios
- the memory wall works beautifully on a phone

---

# 26. DATA / CONTENT ARCHITECTURE

Keep all personal content separate from UI logic.

Create clear data structures for:

- chapters
- chapter metadata
- photos
- quiz questions
- quiz answers
- quiz feedback
- memory messages
- teen montage photos
- music
- captions
- final letter
- final birthday message

I should be able to replace content without rewriting components.

For example:

`chapters/`

`photos/`

`quiz/`

`messages/`

`audio/`

Use clear naming conventions.

---

# 27. REUSABLE COMPONENTS

Build reusable components such as:

- ChapterIntro
- ProgressIndicator
- MiniGameContainer
- SuccessScreen
- FailureScreen
- MemoryReveal
- PhotoReveal
- PhotoFlip
- PhotoWall
- JigsawPuzzle
- MemoryGame
- RhythmGame
- WalkingGame
- Quiz
- TeenMontage
- LetterScreen
- FinalReveal
- ChapterTransition
- Button
- AudioController
- Timeline

Each mini-game should be isolated and maintainable.

---

# 28. GAME STATE

Track:

- current chapter
- chapter completion status
- quiz answers
- quiz score
- puzzle completion
- clicked photographs
- unlocked memories
- audio state

The player should not accidentally lose progress during normal navigation.

Prevent progression until required activities are complete.

---

# 29. CONTENT PLACEHOLDERS

Do not invent personal information about Hansi.

Where content is missing, use clearly labeled placeholders.

Examples:

`[NEWBORN PHOTO]`

`[INFANT PHOTO]`

`[TODDLER PHOTO]`

`[PRESCHOOL PHOTO]`

`[CHILD PHOTO]`

`[TEEN PHOTO]`

`[QUIZ QUESTION]`

`[QUIZ OPTION A]`

`[QUIZ OPTION B]`

`[QUIZ OPTION C]`

`[QUIZ OPTION D]`

`[CORRECT ANSWER]`

`[QUIZ FEEDBACK]`

`[MEMORY MESSAGE]`

`[TEEN SONG]`

`[FINAL LETTER]`

`[FINAL MESSAGE]`

Do NOT fill these placeholders with invented Hansi-specific information.

---

# 30. CONTENT COLLECTION WORKFLOW

Once the application architecture and design system are established, ask me for the missing personal content **one category at a time**.

Ask for:

### 1. PHOTOGRAPHS BY CHAPTER

I will provide and identify the photographs for:

- Newborn
- Infant
- Toddler
- Preschooler
- Child
- Teen Hansi

### 2. NEWBORN AUDIO / MUSIC

I will provide the relevant audio if needed.

### 3. PRESCHOOL JIGSAW PHOTO

I will provide the exact photograph to turn into the puzzle.

### 4. CHILD QUIZ

I will provide:

- all questions
- MCQ options
- correct answers
- any jokes/feedback I want

**Do not generate the quiz questions yourself.**

### 5. TEEN HANSI PHOTOS

I will provide the photographs for the cinematic montage.

### 6. TEEN HANSI SONG

I will provide the song/music to use.

### 7. CLICKABLE PHOTO MESSAGES

I will provide the wholesome/personal messages for the backs of the photographs.

### 8. FINAL LETTER

I will provide the actual letter.

### 9. FINAL BIRTHDAY MESSAGE

I will provide the final message that appears with:

# HAPPY BIRTHDAY, HANSI.

Do not invent these personal elements.

---

# 31. IMPORTANT INTERACTION PRINCIPLE

The experience should constantly reward curiosity.

The player should feel:

> “What happens if I click this?”

> “What memory is behind this?”

> “What happens after I complete this?”

But do not hide essential navigation or make the game confusing.

The experience should be intuitive without being boring.

---

# 32. FINAL QUALITY BAR

Before considering the project complete, check:

- Does it feel like one coherent experience?
- Do the chapter transitions feel cinematic?
- Do photographs feel integrated into the story?
- Are interactions tactile and satisfying?
- Does typography feel premium?
- Is the colour palette mostly sage, cream and warm white with tasteful pastel accents?
- Is the wood influence subtle rather than literal?
- Does every chapter feel visually connected?
- Does the visual language mature as Hansi grows older?
- Does every animation have a purpose?
- Does the experience work beautifully on mobile?
- Does the ending have emotional buildup?
- Does the clickable-photo section clearly communicate that the photos should be clicked?
- Does the letter feel personal rather than like an email?
- Does the final birthday reveal feel earned?
- Can I replace all personal content easily?

The final result should feel:

**colourful but calm**

**natural but not brown**

**playful but not childish**

**nostalgic but not outdated**

**premium but still warm**

**interactive but not complicated**

Most importantly:

## IT SHOULD FEEL LIKE A WORLD MADE SPECIFICALLY FOR HANSI.

Prioritize polish, storytelling, interaction quality, typography, transitions, and emotional payoff over unnecessary technical complexity.

DO NOT fill missing personal content with generic AI-generated birthday material.

Build the architecture first and wait for my actual photographs, quiz questions, music, messages, letter, and final birthday content.