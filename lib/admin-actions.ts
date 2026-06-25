"use client";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "@/lib/firebase-client";
import type { GraphEdge, GraphNode } from "@/lib/types";

export type NodeFormData = Omit<GraphNode, "id">;
export type EdgeFormData = Omit<GraphEdge, "id">;

export async function uploadNodeMedia(
  nodeId: string,
  file: File,
  kind: "image" | "video"
): Promise<string> {
  const path = `node-media/${nodeId}/${kind}-${Date.now()}-${file.name}`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}

export async function saveNode(
  id: string | null,
  data: NodeFormData,
  files: { image?: File; video?: File }
): Promise<string> {
  if (files.image || files.video) {
    let nodeId = id;
    if (!nodeId) {
      const created = await addDoc(collection(db, "nodes"), data);
      nodeId = created.id;
    }
    const updates: Partial<NodeFormData> = {};
    if (files.image) updates.image = await uploadNodeMedia(nodeId, files.image, "image");
    if (files.video) updates.video = await uploadNodeMedia(nodeId, files.video, "video");
    await setDoc(doc(db, "nodes", nodeId), { ...data, ...updates });
    return nodeId;
  }

  if (id) {
    await setDoc(doc(db, "nodes", id), data);
    return id;
  }
  const created = await addDoc(collection(db, "nodes"), data);
  return created.id;
}

export async function deleteNode(id: string): Promise<void> {
  await deleteDoc(doc(db, "nodes", id));
}

export async function saveEdge(
  id: string | null,
  data: EdgeFormData
): Promise<string> {
  if (id) {
    await setDoc(doc(db, "edges", id), data);
    return id;
  }
  const created = await addDoc(collection(db, "edges"), data);
  return created.id;
}

export async function deleteEdge(id: string): Promise<void> {
  await deleteDoc(doc(db, "edges", id));
}
