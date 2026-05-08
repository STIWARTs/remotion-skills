import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from "remotion";
import { Atom } from "../components/Atom";

const WaterMolecule: React.FC<{ rotation: number }> = ({ rotation }) => (
  <div style={{ transform: `rotate(${rotation}deg)`, position: "relative", width: 140, height: 140 }}>
    <div style={{ position: "absolute", top: 0, left: 30 }}>
      <Atom symbol="O" color="#ef4444" size={80} />
      <div style={{ position: "absolute", top: 10, left: -20, fontSize: 24, color: "white", fontWeight: "bold" }}>δ-</div>
    </div>
    <div style={{ position: "absolute", bottom: 0, left: 0 }}>
      <Atom symbol="H" color="#e2e8f0" textColor="#0f172a" size={50} />
      <div style={{ position: "absolute", bottom: -10, left: -20, fontSize: 24, color: "white", fontWeight: "bold" }}>δ+</div>
    </div>
    <div style={{ position: "absolute", bottom: 0, right: 10 }}>
      <Atom symbol="H" color="#e2e8f0" textColor="#0f172a" size={50} />
      <div style={{ position: "absolute", bottom: -10, right: -20, fontSize: 24, color: "white", fontWeight: "bold" }}>δ+</div>
    </div>
  </div>
);

export const Scene8: React.FC = () => {
  const frame = useCurrentFrame();

  const hBondOpacity1 = interpolate(frame, [100, 120], [0, 1], { extrapolateRight: "clamp" });
  const hBondOpacity2 = interpolate(frame, [120, 140], [0, 1], { extrapolateRight: "clamp" });

  const networkScale = interpolate(frame, [200, 260], [1, 0.6], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0f172a", color: "white", fontFamily: "Inter, Arial, sans-serif" }}>
      <h1 style={{ position: "absolute", top: 80, width: "100%", textAlign: "center", fontSize: 64, fontWeight: "bold", color: "#60a5fa" }}>
        Intermolecular Forces
      </h1>

      <div style={{ position: "absolute", top: 200, width: "100%", textAlign: "center", fontSize: 40, color: "#cbd5e1" }}>
        Forces <i>between</i> molecules (e.g., Hydrogen Bonding in Water)
      </div>

      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", top: 100 }}>
        <div style={{ position: "relative", width: 800, height: 600, transform: `scale(${networkScale})` }}>
          
          {/* Central Water */}
          <div style={{ position: "absolute", top: "40%", left: "40%" }}>
            <WaterMolecule rotation={0} />
          </div>

          {/* Water 2 */}
          <div style={{ position: "absolute", top: "10%", left: "60%" }}>
            <WaterMolecule rotation={120} />
          </div>

          {/* Water 3 */}
          <div style={{ position: "absolute", top: "70%", left: "20%" }}>
            <WaterMolecule rotation={-60} />
          </div>

          {/* H-Bonds */}
          <Sequence from={100} layout="none">
            <div style={{ 
              position: "absolute", 
              top: "30%", 
              left: "55%", 
              width: 80, 
              borderTop: "6px dotted #fbbf24", 
              transform: "rotate(-30deg)", 
              opacity: hBondOpacity1 
            }} />
          </Sequence>

          <Sequence from={120} layout="none">
            <div style={{ 
              position: "absolute", 
              top: "65%", 
              left: "35%", 
              width: 80, 
              borderTop: "6px dotted #fbbf24", 
              transform: "rotate(45deg)", 
              opacity: hBondOpacity2 
            }} />
          </Sequence>

        </div>
      </AbsoluteFill>

      <Sequence from={260} layout="none">
        <div style={{ position: "absolute", bottom: 100, width: "100%", textAlign: "center", fontSize: 48, fontWeight: "bold", color: "#fbbf24" }}>
          Creates strong networks → High Boiling Point!
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
