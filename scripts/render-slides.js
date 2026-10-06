(() => {
  "use strict";

  const part1 = window.VOICE_EVALS_SLIDES_PART_1;
  const part2 = window.VOICE_EVALS_SLIDES_PART_2;
  const enrichment = window.VOICE_EVALS_VCON_ENRICHMENT;
  const part3 = window.VOICE_EVALS_SLIDES_PART_3;
  const parts = [part1, part2, part3, enrichment];

  if (parts.some((part) => !Array.isArray(part))) {
    throw new Error("Presentation slide data did not load correctly.");
  }

  const main = [...part1, ...part2.filter((slide) => slide.id !== "demo"), ...part3.filter((slide) => !["standards", "boundary"].includes(slide.id))];
  const appendix = [...enrichment, ...part3.filter((slide) => slide.id === "standards"), ...part2.filter((slide) => slide.id === "demo"), ...part3.filter((slide) => slide.id === "boundary")]
    .map((slide) => ({ ...slide, appendix: true }));
  const slides = [...main, ...appendix];
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
      data-appendix="${Boolean(slide.appendix)}"
      aria-label="${slide.appendix ? `Appendix A${index - main.length + 1} of ${appendix.length}` : `Slide ${index + 1} of ${main.length}`}"
    >
      <div class="slide-shell ${slide.shellClass || ""}">${slide.html}</div>
    </section>
  `).join("");

  window.VOICE_EVALS_SLIDES = slides;
  document.dispatchEvent(new CustomEvent("voice-evals:slides-ready", { detail: { count: slides.length } }));
})();
