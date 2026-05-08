import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from "remotion";
import { Atom, Electron } from "../components/Atom";

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();


  // Part 1: H2 (Single Bond) - 0 to 180
  const hX = interpolate(frame, [20, 60], [150, 60], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  
  // Part 2: O2 (Double Bond) - 180 to 360
  const oX = interpolate(frame, [200, 240], [180, 80], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // Part 3: Polar vs Non-polar (HCl) - 360 to 540
  const clPull = interpolate(frame, [400, 440], [0, 40], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0f172a", color: "white", fontFamily: "Inter, Arial, sans-serif" }}>
      <h1 style={{ position: "absolute", top: 80, width: "100%", textAlign: "center", fontSize: 64, fontWeight: "bold", color: "#38bdf8" }}>
        Covalent Bonding
      </h1>

      {/* Part 1: Single Bond (H2) */}
      <Sequence durationInFrames={180} layout="none">
        <h2 style={{ position: "absolute", top: 180, width: "100%", textAlign: "center", fontSize: 48 }}>Single Bond: Sharing 1 pair of electrons</h2>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ position: "absolute", transform: `translateX(-${hX}px)` }}>
            <div style={{ position: "relative", width: 200, height: 200, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ position: "absolute", width: 200, height: 200, border: "2px dashed #94a3b8", borderRadius: "50%" }} />
              <Atom symbol="H" color="#e2e8f0" textColor="#0f172a" size={80} />
              <div style={{ position: "absolute", right: -8, top: "50%", transform: "translateY(-50%)" }}><Electron /></div>
            </div>
          </div>
          <div style={{ position: "absolute", transform: `translateX(${hX}px)` }}>
            <div style={{ position: "relative", width: 200, height: 200, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ position: "absolute", width: 200, height: 200, border: "2px dashed #94a3b8", borderRadius: "50%" }} />
              <Atom symbol="H" color="#e2e8f0" textColor="#0f172a" size={80} />
              <div style={{ position: "absolute", left: -8, top: "50%", transform: "translateY(-50%)" }}><Electron color="#ef4444" /></div>
            </div>
          </div>
        </div>
      </Sequence>

      {/* Part 2: Double Bond (O2) */}
      <Sequence from={180} durationInFrames={180} layout="none">
        <h2 style={{ position: "absolute", top: 180, width: "100%", textAlign: "center", fontSize: 48 }}>Double Bond: Sharing 2 pairs</h2>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ position: "absolute", transform: `translateX(-${oX}px)` }}>
            <div style={{ position: "relative", width: 260, height: 260, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ position: "absolute", width: 260, height: 260, border: "2px dashed #94a3b8", borderRadius: "50%" }} />
              <Atom symbol="O" color="#ef4444" size={100} />
              <div style={{ position: "absolute", right: -8, top: "40%" }}><Electron /></div>
              <div style={{ position: "absolute", right: -8, top: "60%" }}><Electron /></div>
            </div>
          </div>
          <div style={{ position: "absolute", transform: `translateX(${oX}px)` }}>
            <div style={{ position: "relative", width: 260, height: 260, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ position: "absolute", width: 260, height: 260, border: "2px dashed #94a3b8", borderRadius: "50%" }} />
              <Atom symbol="O" color="#ef4444" size={100} />
              <div style={{ position: "absolute", left: -8, top: "40%" }}><Electron color="#38bdf8" /></div>
              <div style={{ position: "absolute", left: -8, top: "60%" }}><Electron color="#38bdf8" /></div>
            </div>
          </div>
        </div>
      </Sequence>

      {/* Part 3: Polar Covalent (HCl) */}
      <Sequence from={360} durationInFrames={180} layout="none">
        <h2 style={{ position: "absolute", top: 180, width: "100%", textAlign: "center", fontSize: 48 }}>Polar Bonds: Unequal Sharing</h2>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ position: "absolute", transform: `translateX(-100px)` }}>
            <Atom symbol="H" color="#e2e8f0" textColor="#0f172a" size={80} />
            <div style={{ position: "absolute", top: -40, left: 20, fontSize: 32, color: "#ef4444", fontWeight: "bold", opacity: frame > 440 ? 1 : 0 }}>δ+</div>
          </div>
          <div style={{ position: "absolute", transform: `translateX(120px)` }}>
            <Atom symbol="Cl" color="#4ade80" size={140} />
            <div style={{ position: "absolute", top: -40, right: 40, fontSize: 32, color: "#38bdf8", fontWeight: "bold", opacity: frame > 440 ? 1 : 0 }}>δ-</div>
          </div>
          {/* Electron cloud shifting */}
          <div style={{ 
            position: "absolute", 
            width: 200, 
            height: 100, 
            backgroundColor: "rgba(255,255,255,0.2)", 
            borderRadius: "50%", 
            filter: "blur(20px)",
            transform: `translateX(${clPull}px)`
          }} />
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
