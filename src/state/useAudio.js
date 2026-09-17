import { useCallback, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { useGameStore } from './gameStore';

// Thin Howler wrapper. Missing/404 audio files fail silently (Howler's
// onloaderror fires, we just no-op) so the app works fully before real
// audio assets are supplied.
export function usePlaySfx() {
  const muted = useGameStore((s) => s.audio.muted);

  return useCallback(
    (src, opts = {}) => {
      if (muted || !src) return;
      try {
        const sound = new Howl({ src: [src], volume: opts.volume ?? 0.6, html5: false });
        sound.on('loaderror', () => {});
        sound.play();
      } catch {
        // ignore — placeholder/missing audio is expected pre-content
      }
    },
    [muted]
  );
}

// Looping background/chapter music with crossfade-friendly fade in/out.
export function useBackgroundMusic(src, { volume = 0.35, loop = true } = {}) {
  const muted = useGameStore((s) => s.audio.muted);
  const howlRef = useRef(null);

  useEffect(() => {
    if (!src) return undefined;
    let cancelled = false;
    const sound = new Howl({ src: [src], loop, volume: 0, html5: true });
    sound.on('loaderror', () => {});
    sound.on('load', () => {
      if (cancelled) return;
      howlRef.current = sound;
      if (!muted) {
        sound.play();
        sound.fade(0, volume, 900);
      }
    });

    return () => {
      cancelled = true;
      sound.fade(volume, 0, 500);
      setTimeout(() => sound.unload(), 550);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  useEffect(() => {
    const sound = howlRef.current;
    if (!sound) return;
    if (muted) {
      sound.fade(sound.volume(), 0, 300);
    } else {
      sound.play();
      sound.fade(0, volume, 400);
    }
  }, [muted, volume]);
}
