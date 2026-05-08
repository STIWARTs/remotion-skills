import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from "remotion";
import { Atom, Electron } from "../components/Atom";

export const Scene7: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  // Lewis Structure build-up NH3 (Ammonia)
  const nOpacity = interpolate(frame, [20, 30], [0, 1], { extrapolateRight: "clamp" });
  const h1Opacity = interpolate(frame, [40, 50], [0, 1], { extrapolateRight: "clamp" });
  const h2Opacity = interpolate(frame, [60, 70], [0, 1], { extrapolateRight: "clamp" });
  const h3Opacity = interpolate(frame, [80, 90], [0, 1], { extrapolateRight: "clamp" });
  const lonePairOpacity = interpolate(frame, [100, 110], [0, 1], { extrapolateRight: "clamp" });

  // VSEPR rotation (starts at 200)
  const vseprOpacity = interpolate(frame, [200, 220], [0, 1], { extrapolateRight: "clamp" });
  const rotY = interpolate(frame, [250, 450], [0, 360]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#0f172a", color: "white", fontFamily: "Inter, Arial, sans-serif" }}>
      <h1 style={{ position: "absolute", top: 80, width: "100%", textAlign: "center", fontSize: 64, fontWeight: "bold", color: "#f472b6", opacity: titleOpacity }}>
        Molecular Shapes (VSEPR Theory)
      </h1>

      {/* Part 1: Lewis Structure */}
      <Sequence durationInFrames={220} layout="none">
        <div style={{ position: "absolute", top: 200, width: "100%", textAlign: "center", fontSize: 40 }}>
          Step 1: Draw Lewis Structure (Ammonia, NH₃)
        </div>
        <div style={{ position: "absolute", top: "55%", left: "50%", transform: "translate(-50%, -50%)" }}>
          {/* N atom */}
          <div style={{ position: "absolute", transform: "translate(-50%, -50%)", opacity: nOpacity }}>
            <Atom symbol="N" color="#3b82f6" size={100} />
          </div>
          {/* H1 */}
          <div style={{ position: "absolute", transform: "translate(-150px, 30px)", opacity: h1Opacity }}>
            <Atom symbol="H" color="#e2e8f0" textColor="#0f172a" size={60} />
            <div style={{ position: "absolute", right: -20, top: 20 }}><Electron /><Electron color="#ef4444" /></div>
          </div>
          {/* H2 */}
          <div style={{ position: "absolute", transform: "translate(90px, 30px)", opacity: h2Opacity }}>
            <Atom symbol="H" color="#e2e8f0" textColor="#0f172a" size={60} />
            <div style={{ position: "absolute", left: -30, top: 20 }}><Electron /><Electron color="#ef4444" /></div>
          </div>
          {/* H3 */}
          <div style={{ position: "absolute", transform: "translate(-30px, 120px)", opacity: h3Opacity }}>
            <Atom symbol="H" color="#e2e8f0" textColor="#0f172a" size={60} />
            <div style={{ position: "absolute", top: -30, left: 20 }}><Electron /><Electron color="#ef4444" /></div>
          </div>
          {/* Lone Pair */}
          <div style={{ position: "absolute", transform: "translate(-10px, -90px)", opacity: lonePairOpacity, display: "flex", gap: 5 }}>
            <Electron size={24} color="#fbbf24" /><Electron size={24} color="#fbbf24" />
          </div>
        </div>
      </Sequence>

      {/* Part 2: VSEPR 3D shape */}
      <Sequence from={200} durationInFrames={250} layout="none">
        <div style={{ position: "absolute", top: 200, width: "100%", textAlign: "center", fontSize: 40, opacity: vseprOpacity }}>
          Step 2: Electron Pair Repulsion → Trigonal Pyramidal Shape
        </div>
        
        <div style={{ 
          position: "absolute", 
          top: "60%", 
          left: "50%", 
          width: 400,
          height: 400,
          transform: `translate(-50%, -50%) perspective(800px) rotateY(${rotY}deg) rotateX(15deg)`,
          transformStyle: "preserve-3d"
        }}>
          {/* Center N */}
          <div style={{ position: "absolute", top: "40%", left: "40%", transform: "translateZ(0)" }}>
            <Atom symbol="N" color="#3b82f6" size={100} />
          </div>
          
          {/* Lone Pair Cloud */}
          <div style={{ position: "absolute", top: "10%", left: "40%", width: 80, height: 120, backgroundColor: "rgba(251, 191, 36, 0.4)", borderRadius: "50%", transform: "translateZ(0) translateY(-20px)" }} />

          {/* H Atoms in 3D */}
          <div style={{ position: "absolute", top: "70%", left: "10%", transform: "translateZ(100px)" }}>
            <Atom symbol="H" color="#e2e8f0" textColor="#0f172a" size={60} />
          </div>
          <div style={{ position: "absolute", top: "70%", left: "70%", transform: "translateZ(100px)" }}>
            <Atom symbol="H" color="#e2e8f0" textColor="#0f172a" size={60} />
          </div>
          <div style={{ position: "absolute", top: "60%", left: "40%", transform: "translateZ(-150px)" }}>
            <Atom symbol="H" color="#e2e8f0" textColor="#0f172a" size={60} />
          </div>
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
