(() => {
  "use strict";

  const slides = Array.from(document.querySelectorAll(".slide"));
  if (!slides.length) return;

  const body = document.body;
  const presentButton = document.getElementById("presentButton");
  const previousButton = document.getElementById("previousButton");
  const nextButton = document.getElementById("nextButton");
  const currentSlide = document.getElementById("currentSlide");
  const totalSlides = document.getElementById("totalSlides");
  const presentCurrent = document.getElementById("presentCurrent");
  const presentTotal = document.getElementById("presentTotal");
  const progressBar = document.getElementById("progressBar");
  const helpButton = document.getElementById("helpButton");
  const helpDialog = document.getElementById("helpDialog");
  const navLinks = Array.from(document.querySelectorAll(".section-nav a"));
  let activeIndex = 0;

  slides.forEach((slide) => { slide.tabIndex = -1; });

  const clampIndex = (value) => Math.max(0, Math.min(slides.length - 1, value));
  const isPresenting = () => body.classList.contains("presenting");

  function updateUi(index) {
    activeIndex = clampIndex(index);
    const human = activeIndex + 1;
    const total = slides.length;
    currentSlide.textContent = String(human);
    totalSlides.textContent = String(total);
    presentCurrent.textContent = String(human);
    presentTotal.textContent = String(total);
    progressBar.style.width = `${(human / total) * 100}%`;

    const currentId = slides[activeIndex].id;
    navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`));
    slides.forEach((slide, idx) => slide.classList.toggle("is-active", idx === activeIndex));

    previousButton.disabled = activeIndex === 0;
    nextButton.disabled = activeIndex === slides.length - 1;
  }

  function goTo(index, behavior = "smooth") {
    updateUi(index);
    const slide = slides[activeIndex];
    if (isPresenting()) {
      history.replaceState(null, "", `${location.pathname}${location.search}#${slide.id}`);
      slide.focus({ preventScroll: true });
    } else {
      slide.scrollIntoView({ behavior, block: "start" });
    }
  }

  function enterPresentation(index = activeIndex) {
    body.classList.add("presenting");
    presentButton.setAttribute("aria-pressed", "true");
    presentButton.lastChild.textContent = " Exit";
    goTo(index, "auto");
  }

  function exitPresentation() {
    body.classList.remove("presenting");
    presentButton.setAttribute("aria-pressed", "false");
    presentButton.lastChild.textContent = " Present";
    requestAnimationFrame(() => slides[activeIndex].scrollIntoView({ behavior: "auto", block: "start" }));
  }

  function togglePresentation() {
    if (isPresenting()) exitPresentation();
    else enterPresentation();
  }

  const observer = new IntersectionObserver((entries) => {
    if (isPresenting()) return;
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) updateUi(Number(visible.target.dataset.slideIndex));
  }, { rootMargin: "-34% 0px -34% 0px", threshold: [0, 0.25, 0.5, 0.75] });

  slides.forEach((slide) => observer.observe(slide));

  presentButton.addEventListener("click", togglePresentation);
  previousButton.addEventListener("click", () => goTo(activeIndex - 1));
  nextButton.addEventListener("click", () => goTo(activeIndex + 1));

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href").slice(1);
      const index = slides.findIndex((slide) => slide.id === id);
      if (index < 0) return;
      if (isPresenting()) {
        event.preventDefault();
        goTo(index, "auto");
      } else {
        updateUi(index);
      }
    });
  });

  const openHelp = () => {
    if (!helpDialog.open) helpDialog.showModal();
  };

  helpButton.addEventListener("click", openHelp);

  document.addEventListener("keydown", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const modified = event.metaKey || event.ctrlKey || event.altKey;
    const textEntry = Boolean(target?.closest("input, textarea, select, [contenteditable=\"true\"]"));
    const spaceConsumer = Boolean(target?.closest("button, a, input, textarea, select, summary, [contenteditable=\"true\"]"));
    if (modified || textEntry) return;

    if (event.key === "?") {
      event.preventDefault();
      openHelp();
      return;
    }
    if (event.key === "Escape" && helpDialog.open) {
      event.preventDefault();
      helpDialog.close();
      return;
    }
    if (event.key.toLowerCase() === "p") {
      event.preventDefault();
      togglePresentation();
      return;
    }
    if (!isPresenting()) return;

    if (["ArrowRight", "PageDown"].includes(event.key) || (event.key === " " && !spaceConsumer)) {
      event.preventDefault();
      goTo(activeIndex + 1, "auto");
    } else if (["ArrowLeft", "PageUp"].includes(event.key)) {
      event.preventDefault();
      goTo(activeIndex - 1, "auto");
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0, "auto");
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(slides.length - 1, "auto");
    } else if (event.key === "Escape") {
      event.preventDefault();
      exitPresentation();
    }
  });

  const scenarios = {
    success: {
      badge: "BUSINESS SUCCESS",
      speech: "“Your subscription has been canceled. You will not be charged at the next renewal.”",
      tool: "success",
      state: "canceled",
      claim: "verified completion",
      recovery: "not required",
      summary: "Task completed and the spoken claim matches authoritative state."
    },
    safe: {
      badge: "SAFE FAILURE",
      speech: "“I couldn’t confirm the cancellation. I can connect you to a specialist so we don’t give you the wrong information.”",
      tool: "timeout",
      state: "active",
      claim: "uncertainty disclosed",
      recovery: "handoff offered",
      summary: "Task incomplete, but the agent stayed truthful and recoverable."
    },
    false: {
      badge: "FALSE SUCCESS",
      speech: "“Your subscription has been canceled successfully.”",
      tool: "timeout",
      state: "active",
      claim: "unsupported completion",
      recovery: "none",
      summary: "The transcript sounds good, but the claim contradicts authoritative state."
    }
  };

  const result = document.getElementById("demoResult");
  const fields = {
    badge: document.getElementById("demoBadge"),
    speech: document.getElementById("demoSpeech"),
    tool: document.getElementById("demoTool"),
    state: document.getElementById("demoState"),
    claim: document.getElementById("demoClaim"),
    recovery: document.getElementById("demoRecovery"),
    summary: document.getElementById("demoSummary")
  };

  document.querySelectorAll("[data-demo-scenario]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.demoScenario;
      const scenario = scenarios[key];
      if (!scenario) return;
      result.dataset.state = key;
      Object.entries(fields).forEach(([field, element]) => { element.textContent = scenario[field]; });
      document.querySelectorAll("[data-demo-scenario]").forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
    });
  });

  const requestedId = location.hash.slice(1);
  const requestedIndex = slides.findIndex((slide) => slide.id === requestedId);
  updateUi(requestedIndex >= 0 ? requestedIndex : 0);

  if (new URLSearchParams(location.search).get("present") === "1") {
    enterPresentation(requestedIndex >= 0 ? requestedIndex : 0);
  }
})();
