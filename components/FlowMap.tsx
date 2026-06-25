"use client";

import {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useEffect, useMemo } from "react";
import { edges as rawEdges, nodes as rawNodes } from "@/lib/graph-data";
import { KIND_STYLES } from "@/lib/kind-styles";
import type { GraphNode } from "@/lib/types";
import CardNode, { type CardNodeType } from "./CardNode";
import { useLanguageStore } from "@/store/language-store";

const nodeTypes = { card: CardNode };

function toFlowNodes(data: GraphNode[]): CardNodeType[] {
  return data.map((n) => ({
    id: n.id,
    type: "card",
    position: { x: n.x, y: n.y },
    data: { ...n },
  }));
}

function toFlowEdges(
  data: typeof rawEdges,
  lang: "si" | "en"
): Edge[] {
  return data.map((e) => {
    const sourceKind = rawNodes.find((n) => n.id === e.source)?.kind;
    const color = sourceKind ? KIND_STYLES[sourceKind].hex : "#71717a";
    return {
      id: e.id,
      source: e.source,
      target: e.target,
      label: e.label?.[lang],
      animated: false,
      style: { stroke: color, strokeWidth: 1.5, opacity: 0.6 },
      labelStyle: { fill: "#e4e4e7", fontSize: 11 },
      labelBgStyle: { fill: "#18181b", fillOpacity: 0.8 },
    };
  });
}

export default function FlowMap() {
  const lang = useLanguageStore((s) => s.lang);
  const initialNodes = useMemo(() => toFlowNodes(rawNodes), []);
  const initialEdges = useMemo(
    () => toFlowEdges(rawEdges, lang),
    [lang]
  );

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    setEdges(initialEdges);
  }, [initialEdges, setEdges]);

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        colorMode="dark"
        minZoom={0.1}
        maxZoom={1.5}
        defaultViewport={{ x: 0, y: 0, zoom: 0.55 }}
        proOptions={{ hideAttribution: true }}
      >
        <Background variant={BackgroundVariant.Dots} gap={24} size={1} />
        <Controls />
        <MiniMap
          pannable
          zoomable
          maskColor="rgba(0,0,0,0.6)"
          style={{ backgroundColor: "#18181b" }}
        />
      </ReactFlow>
    </div>
  );
}
