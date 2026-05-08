import React from "react";


export const Atom: React.FC<{
  symbol: string;
  color: string;
  size?: number;
  textColor?: string;
}> = ({ symbol, color, size = 100, textColor = "#ffffff" }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: `0 0 20px ${color}80, inset 0 0 20px rgba(0,0,0,0.2)`,
        border: "4px solid rgba(255,255,255,0.2)",
      }}
    >
      <span
        style={{
          fontFamily: "Inter, Arial, sans-serif",
          fontWeight: "bold",
          fontSize: size * 0.4,
          color: textColor,
        }}
      >
        {symbol}
      </span>
    </div>
  );
};

export const Electron: React.FC<{ size?: number; color?: string }> = ({
  size = 16,
  color = "#fbbf24",
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        boxShadow: `0 0 10px ${color}`,
      }}
    />
  );
};
