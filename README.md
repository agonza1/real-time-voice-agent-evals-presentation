# Evaluating Real-Time Voice Agents Beyond AI Models

## Building and Using an Open-Source Evaluation Workbench with vCon

A clean, self-contained HTML/CSS/JavaScript presentation for VON Evolution 2026.

The presentation argues that a production voice agent must be evaluated as a complete real-time system—not only as an AI model or final transcript. It connects conversation experience, speech boundaries, agent execution, tool evidence, authoritative business state, and portable vCon artifacts to the open-source [ConversationAgentEvals](https://github.com/agonza1/ConversationAgentEvals) workbench.

## Open the presentation

After GitHub Pages is enabled for this repository, the site will be available at:

**https://agonza1.github.io/real-time-voice-agent-evals-presentation/**

The repository includes a GitHub Actions workflow that deploys every push to `main`.

## Features

- Scrollable narrative with full-screen slide mode
- Keyboard navigation and direct `?present=1` launch
- Responsive layouts for stage, desktop, tablet, and mobile
- Interactive cancellation/tool-timeout fixture
- Explicit current-vs-roadmap engineering boundaries
- Linked standards, papers, and open-source projects
- No framework, build tool, package install, or external font dependency
- Print styles for PDF fallback

## Controls

| Key | Action |
| --- | --- |
| `P` | Toggle presentation mode |
| `←` / `→` | Previous / next slide |
| `Space` | Next slide |
| `Home` / `End` | First / last slide |
| `Esc` | Exit presentation mode |
| `?` | Keyboard help |

## Run locally

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

The presentation has no build step and no external runtime dependencies.

## Test

Run the deterministic repository smoke test with Node.js 18 or newer:

```bash
npm test
```

The smoke test uses only Node.js built-ins and requires no package installation.

## Architecture and evidence boundary

This repository contains the interactive presentation—not a second evaluation engine.

- [ConversationAgentEvals](https://github.com/agonza1/ConversationAgentEvals) owns test orchestration, evidence normalization, evaluation artifacts, reports, and regression comparisons.
- [Agentic Contact Center](https://github.com/agonza1/agentic-contact-center) is an optional reference target and failure-path demonstration.
- [rtc-asr](https://github.com/agonza1/rtc-asr) provides optional streaming speech evidence and reproducible ASR benchmarks.
- [ASSERT](https://github.com/responsibleai/ASSERT) provides compatible contracts and optional upstream semantic judging.
- [vCon Core](https://datatracker.ietf.org/doc/draft-ietf-vcon-vcon-core/) is the portable conversation container; CAE-specific evaluation schemas remain versioned application conventions.

The interactive demo in this site is clearly labeled as a fixture. It does not claim to prove SIP/PSTN execution, browser-microphone interoperability, production network behavior, or full-duplex barge-in.

## GitHub Pages

The included workflow uses the official Pages actions. On a new repository, GitHub may require one initial configuration step:

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Re-run the `Deploy presentation to GitHub Pages` workflow if the first run occurred before Pages was enabled.

## License

MIT
