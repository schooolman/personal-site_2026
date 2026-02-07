import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#000000",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "#cbd73a",
            letterSpacing: "-2px",
            display: "flex",
          }}
        >
          JS
        </div>
      </div>
    ),
    { ...size }
  );
}
