# Evaluating Real-Time Voice Agents Beyond AI Models

## Building and Using an Open-Source Evaluation Workbench with vCon

A clean, self-contained HTML/CSS/JavaScript presentation for VON Evolution 2026.

The presentation argues that a production voice agent must be evaluated as a complete real-time system—not only as an AI model or final transcript. It connects conversation experience, speech boundaries, agent execution, tool evidence, authoritative business state, and portable vCon artifacts to the open-source [ConversationAgentEvals](https://github.com/agonza1/ConversationAgentEvals) workbench.

## Open the presentation

**https://agonza1.github.io/real-time-voice-agent-evals-presentation/**

For stage delivery, open directly in full-screen presentation mode:

**https://agonza1.github.io/real-time-voice-agent-evals-presentation/?present=1**

Every push to `main` is validated and deployed automatically through GitHub Actions.

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

## Repository smoke test

Run the deterministic repository checks with the standard Node command:

```bash
npm test
```

The smoke test uses Node's built-in test runner. It needs no package installation and verifies the presentation structure, local assets, controls, engineering-boundary language, published URL, and Pages workflow.

## Architecture and evidence boundary

This repository contains the interactive presentation—not a second evaluation engine.

- [ConversationAgentEvals](https://github.com/agonza1/ConversationAgentEvals) owns test orchestration, evidence normalization, evaluation artifacts, reports, and regression comparisons.
- [Agentic Contact Center](https://github.com/agonza1/agentic-contact-center) is an optional reference target and failure-path demonstration.
- [rtc-asr](https://github.com/agonza1/rtc-asr) provides optional streaming speech evidence and reproducible ASR benchmarks.
- [ASSERT](https://github.com/responsibleai/ASSERT) provides compatible contracts and optional upstream semantic judging.
- [vCon Core](https://datatracker.ietf.org/doc/draft-ietf-vcon-vcon-core/) is the portable conversation container; CAE-specific evaluation schemas remain versioned application conventions.

The interactive demo in this site is clearly labeled as a fixture. It does not claim to prove SIP/PSTN execution, browser-microphone interoperability, production network behavior, or full-duplex barge-in.

## Deployment

The GitHub Actions workflow:

1. Runs the dependency-free smoke tests.
2. Packages the static presentation.
3. Deploys it to the repository's GitHub Pages environment.

## License

MIT
