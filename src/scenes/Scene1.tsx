import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from "remotion";
import { Atom } from "../components/Atom";

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animations for Title
  const titleScale = spring({
    frame,
    fps,
    config: { damping: 12 },
  });
  const titleOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  // Animations for Subtitle
  const subtitleTranslateY = interpolate(frame, [40, 60], [50, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const subtitleOpacity = interpolate(frame, [40, 60], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // Molecule formation at the end (around frame 150)
  const molOpacity = interpolate(frame, [150, 180], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const h1TranslateX = spring({ frame: frame - 150, fps, config: { damping: 12 }, from: -200, to: -80 });
  const h2TranslateX = spring({ frame: frame - 150, fps, config: { damping: 12 }, from: 200, to: 80 });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0f172a", color: "white", fontFamily: "Inter, Arial, sans-serif" }}>
      {/* Background Particles (simplified) */}
      {Array.from({ length: 15 }).map((_, i) => {
        const xOffset = Math.sin(frame / (20 + i)) * 50;
        const yOffset = Math.cos(frame / (15 + i)) * 50;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${(i * 13) % 100}%`,
              top: `${(i * 17) % 100}%`,
              width: 10,
              height: 10,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "50%",
              transform: `translate(${xOffset}px, ${yOffset}px)`,
            }}
          />
        );
      })}

      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <Sequence durationInFrames={160}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1
              style={{
                fontSize: 80,
                fontWeight: "bold",
                textAlign: "center",
                opacity: titleOpacity,
                transform: `scale(${titleScale})`,
                margin: 0,
                color: "#60a5fa",
              }}
            >
              Chemical Bonding:<br />How Atoms Connect
            </h1>
            <p
              style={{
                fontSize: 40,
                opacity: subtitleOpacity,
                transform: `translateY(${subtitleTranslateY}px)`,
                color: "#cbd5e1",
                marginTop: 20,
              }}
            >
              Understanding the forces that hold matter together
            </p>
          </div>
        </Sequence>

        <Sequence from={150}>
          <div style={{ opacity: molOpacity, position: "relative", width: 400, height: 400, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "absolute", transform: `translate(${h1TranslateX}px, 60px)` }}>
              <Atom symbol="H" color="#e2e8f0" textColor="#0f172a" size={80} />
            </div>
            <div style={{ position: "absolute", transform: `translate(${h2TranslateX}px, 60px)` }}>
              <Atom symbol="H" color="#e2e8f0" textColor="#0f172a" size={80} />
            </div>
            <div style={{ position: "absolute", transform: `translate(0px, -40px)`, zIndex: 10 }}>
              <Atom symbol="O" color="#ef4444" size={140} />
            </div>
          </div>
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
