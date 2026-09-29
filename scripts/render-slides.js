(() => {
  "use strict";

  const part2 = window.VOICE_EVALS_SLIDES_PART_2;
  const enrichment = window.VOICE_EVALS_VCON_ENRICHMENT;
  const parts = [
    window.VOICE_EVALS_SLIDES_PART_1,
    Array.isArray(part2) ? part2.slice(0, 1) : part2,
    enrichment,
    Array.isArray(part2) ? part2.slice(1) : part2,
    window.VOICE_EVALS_SLIDES_PART_3,
  ];

  if (parts.some((part) => !Array.isArray(part))) {
    throw new Error("Presentation slide data did not load correctly.");
  }

  const slides = parts.flat();
  const deck = document.getElementById("deck");
  if (!deck) throw new Error("Presentation deck container is missing.");

  const ids = new Set();
  for (const slide of slides) {
    if (!slide.id || ids.has(slide.id)) throw new Error(`Invalid or duplicate slide id: ${slide.id}`);
    ids.add(slide.id);
  }

  deck.innerHTML = slides.map((slide, index) => `
    <section
      class="slide ${slide.className || ""}"
      id="${slide.id}"
      data-slide-index="${index}"
      aria-label="Slide ${index + 1} of ${slides.length}"
    >
      <div class="slide-shell ${slide.shellClass || ""}">${slide.html}</div>
    </section>
  `).join("");

  window.VOICE_EVALS_SLIDES = slides;
  document.dispatchEvent(new CustomEvent("voice-evals:slides-ready", { detail: { count: slides.length } }));
})();
