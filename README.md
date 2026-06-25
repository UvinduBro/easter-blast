# Pasku Map — Easter Sunday Attack Mind Map

An interactive, bilingual (Sinhala / English) mind map exploring the people, events, allegations and
counter-arguments that have surrounded the investigations into Sri Lanka's 2019 Easter Sunday attacks.
Built with Next.js (App Router) and [`@xyflow/react`](https://reactflow.dev/).

> **Disclaimer**: The content reflects one author's (Dasun Sameera Weerasinghe) own self-described,
> partial and independently compiled research. Many of the claims and allegations shown are unproven
> and contested. This is also visible as a banner inside the app itself.

## Stack

- Next.js (App Router) + TypeScript
- [`@xyflow/react`](https://reactflow.dev/) for the node-graph canvas
- Tailwind CSS v4
- Zustand for language-toggle and UI state (persisted to `localStorage`)
- `next/font` (Noto Sans Sinhala)
- Fully static — no backend, no API routes

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `app/page.tsx` — page shell: header, disclaimer, legend, flow canvas, detail drawer
- `components/FlowMap.tsx` — React Flow canvas (nodes, edges, minimap, controls)
- `components/CardNode.tsx` — custom node renderer
- `components/DetailDrawer.tsx` — slide-in panel (bottom sheet on mobile) with bilingual detail + connections
- `components/Legend.tsx` — category color legend
- `components/Disclaimer.tsx` — dismissible disclaimer banner
- `lib/graph-data.ts` — the node/edge dataset (all captions live here, not in JSX)
- `lib/types.ts` — shared types
- `lib/kind-styles.ts` — color/label mapping per node category
- `store/language-store.ts` — Sinhala/English toggle (persisted)
- `store/ui-store.ts` — selected-node state for the detail drawer

## Building

```bash
npm run build
```

`next.config.ts` sets `output: "export"`, so `npm run build` produces a fully static site in `out/`
that works on Vercel as well as any static host.

## Deploying to Vercel

Vercel auto-detects Next.js. Just import the repo at [vercel.com/new](https://vercel.com/new) and
deploy — no configuration needed. The static export still works fine as a normal Vercel deployment.

## Deploying to GitHub Pages

GitHub Pages serves **project** pages (`https://<user>.github.io/<repo>/`) from a sub-path, so the
build needs to know that sub-path via `NEXT_PUBLIC_BASE_PATH`:

```bash
NEXT_PUBLIC_BASE_PATH=/<repo-name> npm run build
```

This produces a static site in `out/` with all asset/link paths prefixed with `/<repo-name>`. Then
either:

- Push the contents of `out/` to a `gh-pages` branch (e.g. via the `gh-pages` npm package or a GitHub
  Action), or
- Use a workflow that uploads `out/` as a Pages artifact (`actions/upload-pages-artifact` +
  `actions/deploy-pages`).

If you're instead serving from a **user/org** page (`https://<user>.github.io/`, root-level), leave
`NEXT_PUBLIC_BASE_PATH` unset.

## Notes

- All node/edge captions are data (`lib/graph-data.ts`), never hardcoded in components.
- Avatars are initials-only placeholders. The optional `image` field on a node is supported by
  `CardNode`, but no real photos are fetched or embedded.
- Language choice persists across reloads via `localStorage`.
- Respects `prefers-reduced-motion` (transitions are disabled for users who request it).
