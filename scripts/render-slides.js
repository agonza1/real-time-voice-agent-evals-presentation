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

  const mainOrder = ["intro", "story", "projects", "problem", "system", "dual-voice-architecture", "dual-voice", "layers", "timeline", "outcomes", "workbench", "start", "vcon", "vcon-enrichment", "assert", "judge-reliability", "comparison", "close"];
  const available = new Map(parts.flat().map((slide) => [slide.id, slide]));
  const main = mainOrder.map((id) => {
    const slide = available.get(id);
    if (!slide) throw new Error(`Presentation slide is missing: ${id}`);
    return slide;
  });
  const appendix = [...part3.filter((slide) => slide.id === "standards"), ...part2.filter((slide) => slide.id === "demo"), ...part3.filter((slide) => slide.id === "boundary")]
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

  // Local presentations open the running CAE; hosted decks retain the project URL.
  if (["localhost", "127.0.0.1", "[::1]"].includes(window.location?.hostname)) {
    deck.querySelectorAll("[data-evaluator-link]").forEach((link) => {
      link.href = "http://127.0.0.1:3012/";
    });
  }

  window.VOICE_EVALS_SLIDES = slides;
  document.dispatchEvent(new CustomEvent("voice-evals:slides-ready", { detail: { count: slides.length } }));
})();
