import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig, Sequence } from "remotion";

const ExampleCard: React.FC<{
  title: string;
  subtitle: string;
  icon: string;
  color: string;
}> = ({ title, subtitle, icon, color }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 12 } });

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        backgroundColor: "#1e293b",
        borderRadius: 24,
        padding: 40,
        width: 400,
        height: 400,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: `4px solid ${color}`,
        boxShadow: `0 0 40px ${color}40`,
      }}
    >
      <div style={{ fontSize: 100, marginBottom: 20 }}>{icon}</div>
      <h2 style={{ fontSize: 40, color: "white", marginBottom: 10, textAlign: "center" }}>{title}</h2>
      <p style={{ fontSize: 24, color: color, textAlign: "center", fontWeight: "bold" }}>
        {subtitle}
      </p>
    </div>
  );
};

export const Scene9: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0f172a", color: "white", fontFamily: "Inter, Arial, sans-serif" }}>
      <h1 style={{ position: "absolute", top: 100, width: "100%", textAlign: "center", fontSize: 64, fontWeight: "bold" }}>
        Bonds in the Real World
      </h1>

      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "100%", height: "100%", padding: "0 100px", marginTop: 80 }}>
        <Sequence from={20} layout="none">
          <ExampleCard
            title="DNA Base Pairs"
            subtitle="Hydrogen Bonds"
            icon="🧬"
            color="#ec4899"
          />
        </Sequence>
        
        <Sequence from={60} layout="none">
          <ExampleCard
            title="Batteries"
            subtitle="Ionic Bonds"
            icon="🔋"
            color="#a78bfa"
          />
        </Sequence>

        <Sequence from={100} layout="none">
          <ExampleCard
            title="Steel Alloys"
            subtitle="Metallic Bonds"
            icon="🏗️"
            color="#fbbf24"
          />
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};
