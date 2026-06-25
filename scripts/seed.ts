import { adminDb } from "../lib/firebase-admin";
import { edges, nodes } from "../lib/graph-data";

async function seed() {
  const batch = adminDb.batch();

  for (const node of nodes) {
    batch.set(adminDb.collection("nodes").doc(node.id), node);
  }
  for (const edge of edges) {
    batch.set(adminDb.collection("edges").doc(edge.id), edge);
  }

  await batch.commit();
  console.log(`Seeded ${nodes.length} nodes and ${edges.length} edges.`);
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
  });
