import { adminDb } from "../lib/firebase-admin";
import { edges, nodes } from "../lib/graph-data";
import { PAGE_CONTENT_DEFAULTS } from "../lib/site/page-content-registry";

async function seed() {
  const batch = adminDb.batch();

  for (const node of nodes) {
    batch.set(adminDb.collection("nodes").doc(node.id), node);
  }
  for (const edge of edges) {
    batch.set(adminDb.collection("edges").doc(edge.id), edge);
  }

  const pageSlugs = Object.keys(PAGE_CONTENT_DEFAULTS) as Array<
    keyof typeof PAGE_CONTENT_DEFAULTS
  >;
  for (const slug of pageSlugs) {
    batch.set(adminDb.collection("pageContent").doc(slug), PAGE_CONTENT_DEFAULTS[slug]);
  }

  await batch.commit();
  console.log(
    `Seeded ${nodes.length} nodes, ${edges.length} edges, and ${pageSlugs.length} page content docs.`
  );
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
  });
