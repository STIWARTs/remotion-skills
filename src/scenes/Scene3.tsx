import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig, Sequence } from "remotion";

const Card: React.FC<{
  title: string;
  description: string;
  color: string;
  icon: string;
}> = ({ title, description, color, icon }) => {
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
        height: 500,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTop: `8px solid ${color}`,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div style={{ fontSize: 100, marginBottom: 20 }}>{icon}</div>
      <h2 style={{ fontSize: 48, color: color, marginBottom: 20, textAlign: "center" }}>{title}</h2>
      <p style={{ fontSize: 24, color: "#cbd5e1", textAlign: "center", lineHeight: 1.5 }}>
        {description}
      </p>
    </div>
  );
};

export const Scene3: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0f172a", color: "white", fontFamily: "Inter, Arial, sans-serif" }}>
      <h1 style={{ position: "absolute", top: 100, width: "100%", textAlign: "center", fontSize: 64, fontWeight: "bold" }}>
        3 Main Types of Chemical Bonds
      </h1>
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "100%", height: "100%", padding: "0 100px", marginTop: 50 }}>
        <Sequence from={20} layout="none">
          <Card
            title="Ionic"
            description="Transfer of electrons between metals and non-metals."
            color="#a78bfa"
            icon="🧂"
          />
        </Sequence>
        <Sequence from={50} layout="none">
          <Card
            title="Covalent"
            description="Sharing of electrons between non-metals."
            color="#38bdf8"
            icon="💧"
          />
        </Sequence>
        <Sequence from={80} layout="none">
          <Card
            title="Metallic"
            description="Sea of delocalized electrons in metals."
            color="#fbbf24"
            icon="🛡️"
          />
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};
