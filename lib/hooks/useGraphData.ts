"use client";

import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase-client";
import type { GraphEdge, GraphNode } from "@/lib/types";

interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
  loading: boolean;
  error: string | null;
}

export function useGraphData(): GraphData {
  const [nodes, setNodes] = useState<GraphNode[]>([]);
  const [edges, setEdges] = useState<GraphEdge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubNodes = onSnapshot(
      query(collection(db, "nodes")),
      (snap) => {
        setNodes(snap.docs.map((d) => ({ id: d.id, ...d.data() } as GraphNode)));
        setLoading(false);
      },
      (err) => setError(err.message)
    );
    const unsubEdges = onSnapshot(
      query(collection(db, "edges")),
      (snap) => {
        setEdges(snap.docs.map((d) => ({ id: d.id, ...d.data() } as GraphEdge)));
      },
      (err) => setError(err.message)
    );

    return () => {
      unsubNodes();
      unsubEdges();
    };
  }, []);

  return { nodes, edges, loading, error };
}
