import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} · Donate Your Car to a Cause You Love`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #d4e6f3 0%, #f4f8fb 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#003060",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 700, color: "#0e2238" }}>
            {site.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 78,
            fontWeight: 800,
            color: "#0e2238",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
          }}
        >
          <span>Donate a car,</span>
          <span>
            fund what you{" "}
            <span style={{ color: "#005d70" }}>love.</span>
          </span>
        </div>

        <div style={{ fontSize: 30, color: "#36506a" }}>
          Free pickup · Transparent pricing · More to your cause
        </div>
      </div>
    ),
    { ...size }
  );
}
