import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Atom, Electron } from "../components/Atom";

export const Scene6: React.FC = () => {
  const frame = useCurrentFrame();

  const textOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const text2Opacity = interpolate(frame, [150, 170], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0f172a", color: "white", fontFamily: "Inter, Arial, sans-serif" }}>
      <h1 style={{ position: "absolute", top: 80, width: "100%", textAlign: "center", fontSize: 64, fontWeight: "bold", color: "#fbbf24" }}>
        Metallic Bonding
      </h1>

      <div style={{ position: "absolute", top: 200, width: "100%", textAlign: "center", fontSize: 40, opacity: textOpacity }}>
        A "Sea of Electrons" moving freely around positive ions
      </div>

      <div style={{ position: "absolute", bottom: 100, width: "100%", textAlign: "center", fontSize: 48, fontWeight: "bold", opacity: text2Opacity, color: "#38bdf8" }}>
        Strong, flexible, and highly conductive!
      </div>

      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", top: 50 }}>
        <div style={{ position: "relative", width: 600, height: 400 }}>
          {/* Positive Metal Ions Lattice */}
          {Array.from({ length: 3 }).map((_, row) =>
            Array.from({ length: 4 }).map((_, col) => (
              <div
                key={`ion-${row}-${col}`}
                style={{
                  position: "absolute",
                  left: 100 + col * 120,
                  top: 100 + row * 100,
                }}
              >
                <Atom symbol="M+" color="#fbbf24" textColor="#0f172a" size={80} />
              </div>
            ))
          )}

          {/* Delocalized Electrons flowing */}
          {Array.from({ length: 20 }).map((_, i) => {
            // Animate electrons flowing randomly across the lattice
            const speed = 1 + (i % 3) * 0.5;
            const startX = (i * 47) % 600;
            const startY = (i * 83) % 400;
            const currentX = (startX + frame * speed * 2) % 600;
            const currentY = startY + Math.sin(frame / 10 + i) * 20;

            return (
              <div
                key={`e-${i}`}
                style={{
                  position: "absolute",
                  left: currentX,
                  top: currentY,
                  zIndex: 10,
                }}
              >
                <Electron size={20} color="#38bdf8" />
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
