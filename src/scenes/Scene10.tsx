import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from "remotion";

export const Scene10: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const b1Opacity = interpolate(frame, [40, 60], [0, 1], { extrapolateRight: "clamp" });
  const b2Opacity = interpolate(frame, [80, 100], [0, 1], { extrapolateRight: "clamp" });
  const b3Opacity = interpolate(frame, [120, 140], [0, 1], { extrapolateRight: "clamp" });

  const finalOpacity = interpolate(frame, [200, 240], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0f172a", color: "white", fontFamily: "Inter, Arial, sans-serif" }}>
      <AbsoluteFill style={{ padding: "100px 200px" }}>
        <h1 style={{ fontSize: 64, fontWeight: "bold", color: "#60a5fa", opacity: titleOpacity }}>
          Key Takeaways
        </h1>

        <ul style={{ fontSize: 40, lineHeight: 2, marginTop: 40, listStyleType: "none", padding: 0 }}>
          <li style={{ opacity: b1Opacity, display: "flex", alignItems: "center" }}>
            <span style={{ color: "#a78bfa", marginRight: 20 }}>✔</span> Atoms bond to reach stable states (Octet Rule)
          </li>
          <li style={{ opacity: b2Opacity, display: "flex", alignItems: "center" }}>
            <span style={{ color: "#38bdf8", marginRight: 20 }}>✔</span> Bonds can be Ionic, Covalent, or Metallic
          </li>
          <li style={{ opacity: b3Opacity, display: "flex", alignItems: "center" }}>
            <span style={{ color: "#fbbf24", marginRight: 20 }}>✔</span> Intermolecular forces determine physical properties
          </li>
        </ul>
      </AbsoluteFill>

      <Sequence from={200} layout="none">
        <AbsoluteFill style={{ backgroundColor: "#0f172a", justifyContent: "center", alignItems: "center", opacity: finalOpacity }}>
          <h1 style={{ fontSize: 80, fontWeight: "bold", color: "white", textAlign: "center" }}>
            Chemical Bonds<br />
            <span style={{ color: "#60a5fa" }}>Shape Our World</span>
          </h1>
          <p style={{ fontSize: 32, color: "#cbd5e1", marginTop: 40 }}>
            Thank you for watching!
          </p>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
