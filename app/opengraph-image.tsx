import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Jake Schoolmeesters — Senior Front End Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const spaceMono = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/spacemono/v17/i7dPIFZifjKcF5UAWdDRUEY.ttf"
    )
  ).then((res) => res.arrayBuffer());

  const spaceMonoBold = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/spacemono/v17/i7dMIFZifjKcF5UAWdDRaPpZYFI.ttf"
    )
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          backgroundColor: "#000000",
          padding: "60px 80px",
          fontFamily: "Space Mono",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundColor: "#cbd73a",
            display: "flex",
          }}
        />

        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "6px",
            backgroundColor: "#cbd73a",
            display: "flex",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: "16px",
            display: "flex",
          }}
        >
          Jake Schoolmeesters
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: "#cbd73a",
            marginBottom: "40px",
            display: "flex",
          }}
        >
          Senior Front End Developer
        </div>

        {/* Divider */}
        <div
          style={{
            width: "120px",
            height: "4px",
            backgroundColor: "#103ee5",
            marginBottom: "40px",
            display: "flex",
          }}
        />

        {/* URL */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: "#666666",
            display: "flex",
          }}
        >
          jake.school
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Space Mono",
          data: spaceMono,
          weight: 400,
          style: "normal",
        },
        {
          name: "Space Mono",
          data: spaceMonoBold,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
