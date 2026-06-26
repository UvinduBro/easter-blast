# Easter Blast — easterattack.com

A bilingual (Sinhala / English) content site documenting Sri Lanka's 2019 Easter Sunday attacks: the
victims, the perpetrators, the intelligence failure, the court cases and the ongoing search for
accountability. Every claim on the site is tagged **FACT**, **ALLEGATION**, **DEVELOPING** or
**DISPUTED** so readers can tell what's proven from what's contested. The site also embeds an
interactive relationship mind map of the people, places, organisations and events in the case.

Built with Next.js (App Router), Tailwind CSS, [`@xyflow/react`](https://reactflow.dev/) and Firebase.

> **Disclaimer**: The content reflects one author's (Dasun Sameera Weerasinghe) own self-described,
> partial and independently compiled research. Many of the claims and allegations shown are unproven
> and contested. This is also visible as a banner inside the mind map.

## Stack

- Next.js (App Router) + TypeScript
- Firebase Firestore — mind-map node/edge dataset, read live by the public app via `onSnapshot`
- Firebase Storage — admin-uploaded images/videos for mind-map nodes
- Firebase Authentication — email/password login gating the admin panel
- [`@xyflow/react`](https://reactflow.dev/) for the mind-map canvas, laid out automatically with
  [`@dagrejs/dagre`](https://github.com/dagrejs/dagre)
- Tailwind CSS v4
- Zustand for the language toggle, mind-map view switcher and selected-node UI state

## Site structure

Ten content pages, all bilingual via a shared `{ si, en }` text model, share one header/footer shell:

`Home` · `Timeline` · `The Attacks` · `Victims` · `Perpetrators` · `Accountability` ·
`Investigation & Controversy` · `Court Cases` · `Updates` · `About & Sources`

Every factual claim renders through `StatusTag` (🟢 fact / 🟡 allegation / 🔵 developing / ⚪ disputed),
so the fact/allegation distinction is visible page-to-page instead of buried in prose.

The Home page embeds a lightweight, read-only version of the mind map; the full interactive
experience (view switcher, search/filter, detail drawer) lives at `/mind-map`.

## Mind map views

`/mind-map`'s header view switcher toggles between five ways of exploring the same dataset:

- **Mind Map** — the node-graph canvas, auto-arranged top-down with dagre so cause → effect
  relationships read top-to-bottom instead of needing manual untangling.
- **Timeline** — nodes grouped by date, oldest to newest, with an "Undated" group at the end.
- **Table** — a searchable, filterable, sortable list of every node.
- **Grouped** — nodes bucketed by category (person, event, allegation, counter-argument, committee, legal).
- **Tree** — a hierarchical, indented forest view built from the edge graph.

Clicking any node/row/card in any view opens the same detail drawer with the bilingual write-up,
image/video, sources and connections.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in Firebase config, see below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Local development with the Firebase emulators

The mind map is designed to run entirely against the [Firebase Local Emulator
Suite](https://firebase.google.com/docs/emulator-suite) so you don't need a real Firebase project to
develop:

```bash
npm run emulators   # starts Auth, Firestore and Storage emulators
npm run seed         # one-off: writes lib/graph-data.ts into the Firestore emulator
```

Set `NEXT_PUBLIC_USE_FIREBASE_EMULATOR=true` in `.env.local` so the client SDK connects to the
emulators instead of production. The Firebase config values (`NEXT_PUBLIC_FIREBASE_*`) can be any
placeholder strings when running against emulators only — they're required by the SDK but not
validated by the emulator.

To create an admin user in the Auth emulator, open the Emulator UI (printed in the terminal,
typically [http://localhost:4000](http://localhost:4000)) → Authentication → Add user.

### Using a real Firebase project

1. Create a project in the [Firebase Console](https://console.firebase.google.com/), enable
   Firestore, Storage and Authentication (Email/Password provider).
2. Copy the web app config into `.env.local` (`NEXT_PUBLIC_FIREBASE_*`), leave
   `NEXT_PUBLIC_USE_FIREBASE_EMULATOR` unset/`false`.
3. Deploy the security rules: `npx firebase deploy --only firestore:rules,storage`.
4. Create at least one admin user (Console → Authentication → Add user) — anyone who can sign in can
   edit the mind-map dataset, there are no roles.
5. Seed the dataset: set `FIREBASE_SERVICE_ACCOUNT_KEY` (paste a service account JSON as one line)
   and `FIREBASE_PROJECT_ID` in `.env.local`, then `npm run seed`.

## Admin panel

`/admin` is a content-management UI for the mind-map dataset, gated behind Firebase Auth:

- `/admin/login` — email/password sign-in.
- `/admin` — dashboard with live node/edge counts.
- `/admin/nodes`, `/admin/nodes/new`, `/admin/nodes/[id]` — list/create/edit nodes: kind, bilingual
  name/role/body text, date, image (URL or file upload to Storage), video (URL or file upload),
  and a list of sources (label + URL).
- `/admin/edges`, `/admin/edges/new`, `/admin/edges/[id]` — list/create/edit connections between nodes,
  with optional bilingual labels.

New nodes are positioned automatically by the dagre layout on the Mind Map — there's no manual x/y
entry in the admin form. The ten content pages are not editable from `/admin`; their copy lives in
`lib/site-content/*.ts` and is edited in code.

## Project structure

- `app/(site)/` — the ten bilingual content pages (Home, Timeline, The Attacks, Victims,
  Perpetrators, Accountability, Investigation & Controversy, Court Cases, Updates, About & Sources),
  sharing `app/(site)/layout.tsx` (`SiteHeader` + `SiteFooter`)
- `app/mind-map/page.tsx` — the full interactive mind-map app: view switcher, disclaimer, legend,
  active view, detail drawer
- `app/admin/` — admin login, route guard layout, dashboard, and node/edge CRUD pages
- `components/site/` — site shell and content-page components: `SiteHeader`, `SiteFooter`,
  `PageHeader`, `PageBody`, `ContentSection` (boxed entries reused by most content pages),
  `StatusTag`, `Callout`, plus bespoke per-page components (`HomeContent`, `HomeMindMap`,
  `VictimsContent`, `TimelinePhase`, `UpdatesContent`, `UpdateCard`, `CourtCaseCard`,
  `CourtJudgmentTable`, `AboutContent`)
- `components/FlowMap.tsx` — React Flow canvas (dagre-laid-out nodes/edges, minimap, controls)
- `components/CardNode.tsx` — custom node renderer for the Mind Map
- `components/views/` — `TimelineView`, `TableView`, `GroupedView`, `TreeView`
- `components/ViewSwitcher.tsx` — mind-map header control for switching between the five views
- `components/DetailDrawer.tsx` — slide-in panel (bottom sheet on mobile) with bilingual detail,
  image/video, sources and connections — shared by every mind-map view
- `components/Legend.tsx` — category color legend
- `components/Disclaimer.tsx` — dismissible disclaimer banner
- `components/admin/NodeForm.tsx`, `components/admin/EdgeForm.tsx` — admin create/edit forms
- `lib/site-content/` — bilingual copy for each content page (one file per page), kept as data,
  never hardcoded in JSX
- `lib/site/config.ts` — site identity (`easterattack.com` domain, brand name, contact emails)
- `lib/site/nav.ts` — primary navigation
- `lib/site/types.ts` — shared content-page types (`ContentSection`, `Entry`, `StatusMark`)
- `lib/status-styles.ts` — icon/color/label per status tag (fact/allegation/developing/disputed)
- `lib/firebase-client.ts` — Firebase Web SDK init (Auth/Firestore/Storage, with emulator wiring)
- `lib/firebase-admin.ts` — Firebase Admin SDK init, used only by `scripts/seed.ts`
- `lib/hooks/useGraphData.ts` — live `onSnapshot` subscription to the `nodes`/`edges` collections
- `lib/hooks/useAuth.ts` — Firebase Auth state hook used by the admin route guard
- `lib/admin-actions.ts` — admin CRUD + Storage upload helpers
- `lib/layout.ts` — dagre-based auto-layout for the Mind Map
- `lib/tree.ts` — builds the forest used by `TreeView`
- `lib/graph-data.ts` — seed dataset for the mind map; only used by `scripts/seed.ts`
- `lib/types.ts` — shared types, including `LocalizedText` (`{ si, en }`) used across the whole site
- `lib/kind-styles.ts` — color/label mapping per mind-map node category
- `store/language-store.ts` — Sinhala/English toggle (persisted), used site-wide
- `store/view-store.ts` — active mind-map view mode
- `store/ui-store.ts` — selected-node state for the mind-map detail drawer
- `firestore.rules`, `storage.rules` — public read, auth-required write

## Building

```bash
npm run build
```

## Deploying to Vercel

Vercel auto-detects Next.js. Import the repo at [vercel.com/new](https://vercel.com/new), set the
`NEXT_PUBLIC_FIREBASE_*` environment variables (production Firebase project, emulator flag unset),
and deploy.

## Notes

- All content-page copy lives in `lib/site-content/*.ts`, and all mind-map node/edge captions are
  data (Firestore, originally seeded from `lib/graph-data.ts`) — never hardcoded in components.
- `Updates` entries carry a literal `source: "[add link]"` placeholder where a citation URL hasn't
  been confirmed yet; this is intentional and must not be replaced with a guessed URL.
- Avatars are initials-only placeholders. The optional `image` field on a mind-map node is supported
  by `CardNode` and the detail drawer, but no real photos are fetched or embedded by this codebase —
  any image shown is whatever an authenticated admin explicitly uploaded.
- Language choice persists across reloads via `localStorage`.
- Respects `prefers-reduced-motion` (transitions are disabled for users who request it).
