// Showcase page wiring: the stage picker and the hero's example status line.
// Load before nec-dino.js, so the listener catches the hero's first change event.
(() => {
  const LINES = {
    "hatchling/napping": "🦕💤 hatchling · 1.2M · $0.84 · $0/h · 4% of 5h",
    "hatchling/munching": "🦕🍖 hatchling · 9.8M · $6.10 · $9/h · 18% of 5h",
    "chonky/munching": "🦕🍖 chonky · 41.2M · $23.10 · $12/h · 38% of 5h",
    "chonky/sweating": "🦕💦 chonky · 52.7M · $31.40 · $27/h · 61% of 5h",
    "absolute unit/sweating": "🦕💦 absolute unit · 140.3M · $58.20 · $26/h · 78% of 5h",
    "absolute unit/panicking": "🦖🚨 absolute unit · 190.6M · $81.95 · $46/h · 94% of 5h",
  };
  const EXPLODED = "💥 GAME OVER · 5-hour limit · back at 21:50 · $84.10";

  const line = document.getElementById("status-line");
  document.querySelector(".hero-dino").addEventListener("nec-dino-change", (event) => {
    const { stage, mood } = event.detail;
    line.textContent = mood === "exploded" ? EXPLODED : LINES[stage + "/" + mood] || line.textContent;
  });

  const buttons = document.querySelectorAll(".stage-picker button");
  buttons.forEach((button) => button.addEventListener("click", () => {
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
    document.querySelectorAll(".mood nec-dino").forEach((d) => d.setAttribute("stage", button.dataset.stage));
  }));
})();
