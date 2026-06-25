# Pasku Map — Easter Sunday Attack Mind Map

An interactive, bilingual (Sinhala / English) explorer of the people, events, allegations and
counter-arguments that have surrounded the investigations into Sri Lanka's 2019 Easter Sunday attacks.
Built with Next.js (App Router), [`@xyflow/react`](https://reactflow.dev/) and Firebase.

> **Disclaimer**: The content reflects one author's (Dasun Sameera Weerasinghe) own self-described,
> partial and independently compiled research. Many of the claims and allegations shown are unproven
> and contested. This is also visible as a banner inside the app itself.

## Stack

- Next.js (App Router) + TypeScript
- Firebase Firestore — node/edge dataset, read live by the public app via `onSnapshot`
- Firebase Storage — admin-uploaded images/videos for nodes
- Firebase Authentication — email/password login gating the admin panel
- [`@xyflow/react`](https://reactflow.dev/) for the mind-map canvas, laid out automatically with
  [`@dagrejs/dagre`](https://github.com/dagrejs/dagre)
- Tailwind CSS v4
- Zustand for language toggle, view switcher and selected-node UI state

## Views

The header's view switcher toggles between five ways of exploring the same dataset:

- **Mind Map** — the original node-graph canvas, now auto-arranged top-down with dagre so
  cause → effect relationships read top-to-bottom instead of needing manual untangling.
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

The app is designed to run entirely against the [Firebase Local Emulator
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
   edit content, there are no roles.
5. Seed the dataset: set `FIREBASE_SERVICE_ACCOUNT_KEY` (paste a service account JSON as one line)
   and `FIREBASE_PROJECT_ID` in `.env.local`, then `npm run seed`.

## Admin panel

`/admin` is a content-management UI for the dataset, gated behind Firebase Auth:

- `/admin/login` — email/password sign-in.
- `/admin` — dashboard with live node/edge counts.
- `/admin/nodes`, `/admin/nodes/new`, `/admin/nodes/[id]` — list/create/edit nodes: kind, bilingual
  name/role/body text, date, image (URL or file upload to Storage), video (URL or file upload),
  and a list of sources (label + URL).
- `/admin/edges`, `/admin/edges/new`, `/admin/edges/[id]` — list/create/edit connections between nodes,
  with optional bilingual labels.

New nodes are positioned automatically by the dagre layout on the Mind Map — there's no manual x/y
entry in the admin form.

## Project structure

- `app/page.tsx` — page shell: header, view switcher, disclaimer, legend, active view, detail drawer
- `app/admin/` — admin login, route guard layout, dashboard, and node/edge CRUD pages
- `components/FlowMap.tsx` — React Flow canvas (dagre-laid-out nodes/edges, minimap, controls)
- `components/CardNode.tsx` — custom node renderer for the Mind Map
- `components/views/` — `TimelineView`, `TableView`, `GroupedView`, `TreeView`
- `components/ViewSwitcher.tsx` — header control for switching between the five views
- `components/DetailDrawer.tsx` — slide-in panel (bottom sheet on mobile) with bilingual detail,
  image/video, sources and connections — shared by every view
- `components/Legend.tsx` — category color legend
- `components/Disclaimer.tsx` — dismissible disclaimer banner
- `components/admin/NodeForm.tsx`, `components/admin/EdgeForm.tsx` — admin create/edit forms
- `lib/firebase-client.ts` — Firebase Web SDK init (Auth/Firestore/Storage, with emulator wiring)
- `lib/firebase-admin.ts` — Firebase Admin SDK init, used only by `scripts/seed.ts`
- `lib/hooks/useGraphData.ts` — live `onSnapshot` subscription to the `nodes`/`edges` collections
- `lib/hooks/useAuth.ts` — Firebase Auth state hook used by the admin route guard
- `lib/admin-actions.ts` — admin CRUD + Storage upload helpers
- `lib/layout.ts` — dagre-based auto-layout for the Mind Map
- `lib/tree.ts` — builds the forest used by `TreeView`
- `lib/graph-data.ts` — seed dataset (all captions live here, not in JSX); only used by `scripts/seed.ts`
- `lib/types.ts` — shared types
- `lib/kind-styles.ts` — color/label mapping per node category
- `store/language-store.ts` — Sinhala/English toggle (persisted)
- `store/view-store.ts` — active view mode
- `store/ui-store.ts` — selected-node state for the detail drawer
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

- All node/edge captions are data (Firestore, originally seeded from `lib/graph-data.ts`), never
  hardcoded in components.
- Avatars are initials-only placeholders. The optional `image` field on a node is supported by
  `CardNode` and the detail drawer, but no real photos are fetched or embedded by this codebase —
  any image shown is whatever an authenticated admin explicitly uploaded.
- Language choice persists across reloads via `localStorage`.
- Respects `prefers-reduced-motion` (transitions are disabled for users who request it).
