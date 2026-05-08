import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Sequence } from "remotion";
import { Atom } from "../components/Atom";

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Text animations
  const t1Opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const t2Opacity = interpolate(frame, [150, 170], [0, 1], { extrapolateRight: "clamp" });
  const t3Opacity = interpolate(frame, [300, 320], [0, 1], { extrapolateRight: "clamp" });

  // Atoms movement for attraction
  const naX = interpolate(frame, [150, 200], [-300, -100], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const clX = interpolate(frame, [150, 200], [300, 100], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // Force lines opacity
  const forceOpacity = interpolate(frame, [180, 210, 280, 300], [0, 1, 1, 0], { extrapolateRight: "clamp" });

  // Lattice scale & zoom
  const latticeScale = spring({ frame: frame - 300, fps, config: { damping: 14 } });
  const singleAtomsOpacity = interpolate(frame, [280, 300], [1, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0f172a", color: "white", fontFamily: "Inter, Arial, sans-serif" }}>
      <h1 style={{ position: "absolute", top: 80, width: "100%", textAlign: "center", fontSize: 64, fontWeight: "bold", color: "#a78bfa" }}>
        Ionic Bonding
      </h1>

      <div style={{ position: "absolute", top: 200, width: "100%", textAlign: "center", fontSize: 40, opacity: t1Opacity }}>
        1. Complete transfer of electrons
      </div>
      <div style={{ position: "absolute", top: 260, width: "100%", textAlign: "center", fontSize: 40, opacity: t2Opacity }}>
        2. Oppositely charged ions attract (Electrostatic Force)
      </div>
      <div style={{ position: "absolute", top: 320, width: "100%", textAlign: "center", fontSize: 40, opacity: t3Opacity, color: "#fbbf24" }}>
        3. Forms a giant crystal lattice (Releases Energy!)
      </div>

      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", top: 100 }}>
        {/* Single atoms interaction */}
        <div style={{ opacity: singleAtomsOpacity, position: "relative", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          {/* Force Lines */}
          <div style={{ position: "absolute", width: 200, height: 40, borderTop: "4px dashed #fbbf24", opacity: forceOpacity }} />
          
          <div style={{ position: "absolute", transform: `translateX(${naX}px)` }}>
            <Atom symbol="Na+" color="#a78bfa" size={150} />
          </div>
          <div style={{ position: "absolute", transform: `translateX(${clX}px)` }}>
            <Atom symbol="Cl-" color="#4ade80" size={150} />
          </div>
        </div>

        {/* Crystal Lattice Formation */}
        <Sequence from={300} layout="none">
          <div style={{ position: "absolute", transform: `scale(${latticeScale})`, display: "grid", gridTemplateColumns: "repeat(3, 100px)", gap: 10 }}>
            {Array.from({ length: 9 }).map((_, i) => {
              const isNa = i % 2 === 0;
              return (
                <div key={i}>
                  <Atom symbol={isNa ? "Na+" : "Cl-"} color={isNa ? "#a78bfa" : "#4ade80"} size={100} />
                </div>
              );
            })}
          </div>
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
