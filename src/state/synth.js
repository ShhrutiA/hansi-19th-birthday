// Lightweight Web Audio piano-ish tone synth — no audio files required.
// Used by RhythmGame so the melody sounds real before real recordings are supplied.

let ctx = null;
function getCtx() {
  if (!ctx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    ctx = new AudioContext();
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

// Simple additive synth: fundamental + a couple of harmonics, quick attack,
// exponential decay — reads as a soft piano/bell rather than a pure beep.
export function playNote(frequency, { duration = 0.55, volume = 0.22 } = {}) {
  try {
    const audioCtx = getCtx();
    const now = audioCtx.currentTime;
    const master = audioCtx.createGain();
    master.gain.setValueAtTime(0, now);
    master.gain.linearRampToValueAtTime(volume, now + 0.01);
    master.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    master.connect(audioCtx.destination);

    [1, 2, 3].forEach((harmonic, i) => {
      const osc = audioCtx.createOscillator();
      osc.type = i === 0 ? 'triangle' : 'sine';
      osc.frequency.value = frequency * harmonic;
      const gain = audioCtx.createGain();
      gain.gain.value = 1 / (harmonic * 2.2);
      osc.connect(gain);
      gain.connect(master);
      osc.start(now);
      osc.stop(now + duration);
    });
  } catch {
    // Web Audio unavailable — fail silently, visuals still work.
  }
}

// A short noisy "cry" texture for the very first taps of the rhythm game.
export function playCry({ volume = 0.15 } = {}) {
  try {
    const audioCtx = getCtx();
    const now = audioCtx.currentTime;
    const duration = 0.35;
    const bufferSize = audioCtx.sampleRate * duration;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i += 1) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 900;
    filter.Q.value = 0.7;

    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(volume, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);
    noise.start(now);
  } catch {
    // ignore
  }
}
