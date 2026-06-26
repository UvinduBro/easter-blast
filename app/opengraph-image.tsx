import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/site/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LEGEND = [
  { color: "#34d399", label: "Fact" },
  { color: "#fbbf24", label: "Allegation" },
  { color: "#38bdf8", label: "Developing" },
  { color: "#a1a1aa", label: "Disputed" },
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#09090b",
          padding: "80px",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 12,
              backgroundColor: "rgba(220, 38, 38, 0.9)",
              fontSize: 28,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            EB
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
            {SITE_CONFIG.brandName}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 44,
            fontWeight: 700,
            lineHeight: 1.25,
            maxWidth: 980,
          }}
        >
          The 2019 Sri Lanka Easter Sunday Attacks
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 24,
            color: "#a1a1aa",
            maxWidth: 900,
          }}
        >
          Facts, allegations and accountability — clearly labelled.
        </div>

        <div style={{ display: "flex", gap: 24, marginTop: 48 }}>
          {LEGEND.map((s) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  display: "flex",
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  backgroundColor: s.color,
                }}
              />
              <div style={{ display: "flex", fontSize: 20, color: "#d4d4d8" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
