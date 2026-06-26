import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const projectId = process.env.FIREBASE_PROJECT_ID ?? "easter-blast";

function buildApp() {
  // Emulator mode: FIRESTORE_EMULATOR_HOST is enough, no real credentials needed.
  if (process.env.FIRESTORE_EMULATOR_HOST) {
    return initializeApp({ projectId });
  }

  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKey) {
    throw new Error(
      "Set FIRESTORE_EMULATOR_HOST (for local dev) or FIREBASE_SERVICE_ACCOUNT_KEY (a JSON service account key, for production) before running admin scripts."
    );
  }
  let parsed: object;
  try {
    parsed = JSON.parse(serviceAccountKey);
  } catch {
    throw new Error(
      "FIREBASE_SERVICE_ACCOUNT_KEY is not valid JSON. It must be the entire service account " +
        "JSON file contents (Firebase Console → Project Settings → Service Accounts → Generate " +
        "new private key), not just the private_key field."
    );
  }
  return initializeApp({
    credential: cert(parsed),
    projectId,
  });
}

const app = getApps()[0] ?? buildApp();

export const adminDb = getFirestore(app);
