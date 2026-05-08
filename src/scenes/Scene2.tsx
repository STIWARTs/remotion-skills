import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Atom, Electron } from "../components/Atom";

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Intro text fade in
  const textOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  // Na and Cl entrance
  const naX = spring({ frame: frame - 40, fps, config: { damping: 12 }, from: -800, to: -200 });
  const clX = spring({ frame: frame - 40, fps, config: { damping: 12 }, from: 800, to: 200 });

  // Electron transfer from Na to Cl
  // Na's outer electron starts at Na, moves to Cl outer shell
  const transferStartFrame = 120;
  const eX = interpolate(frame, [transferStartFrame, transferStartFrame + 30], [-130, 130], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const eY = interpolate(frame, [transferStartFrame, transferStartFrame + 15, transferStartFrame + 30], [0, -150, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  const labelOpacity = interpolate(frame, [180, 200], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0f172a", color: "white", fontFamily: "Inter, Arial, sans-serif", justifyContent: "center", alignItems: "center" }}>
      <div style={{ position: "absolute", top: 100, opacity: textOpacity, textAlign: "center", fontSize: 48, fontWeight: "bold", width: "80%" }}>
        Atoms bond to achieve stable electron configurations
        <div style={{ color: "#fbbf24", fontSize: 36, marginTop: 10 }}>(The Octet Rule)</div>
      </div>

      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        {/* Sodium Atom */}
        <div style={{ position: "absolute", transform: `translateX(${naX}px)` }}>
          <div style={{ position: "relative", width: 200, height: 200, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "absolute", width: 280, height: 280, border: "2px dashed #475569", borderRadius: "50%" }} />
            <Atom symbol={frame > transferStartFrame + 15 ? "Na+" : "Na"} color="#a78bfa" size={120} />
            {/* The transferring electron */}
            <div style={{ position: "absolute", right: -40, top: 140, transform: `translate(${eX}px, ${eY}px)` }}>
              <Electron size={24} color="#fbbf24" />
            </div>
          </div>
        </div>

        {/* Chlorine Atom */}
        <div style={{ position: "absolute", transform: `translateX(${clX}px)` }}>
          <div style={{ position: "relative", width: 200, height: 200, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "absolute", width: 280, height: 280, border: "2px dashed #475569", borderRadius: "50%" }} />
            <Atom symbol={frame > transferStartFrame + 15 ? "Cl-" : "Cl"} color="#4ade80" size={120} />
            {/* Existing Cl electrons (simplified) */}
            {Array.from({ length: 7 }).map((_, i) => {
              const angle = (i * Math.PI * 2) / 8;
              const x = Math.cos(angle) * 140;
              const y = Math.sin(angle) * 140;
              return (
                <div key={i} style={{ position: "absolute", transform: `translate(${x}px, ${y}px)` }}>
                  <Electron size={24} />
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 150, opacity: labelOpacity, fontSize: 40, color: "#60a5fa", fontWeight: "bold" }}>
          Electron Transfer creates stable ions!
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
