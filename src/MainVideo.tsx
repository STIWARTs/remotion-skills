import { AbsoluteFill, Sequence } from "remotion";
import { Scene1 } from "./scenes/Scene1";
import { Scene2 } from "./scenes/Scene2";
import { Scene3 } from "./scenes/Scene3";
import { Scene4 } from "./scenes/Scene4";
import { Scene5 } from "./scenes/Scene5";
import { Scene6 } from "./scenes/Scene6";
import { Scene7 } from "./scenes/Scene7";
import { Scene8 } from "./scenes/Scene8";
import { Scene9 } from "./scenes/Scene9";
import { Scene10 } from "./scenes/Scene10";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0f172a" }}>
      <Sequence from={0} durationInFrames={300}>
        <Scene1 />
      </Sequence>
      <Sequence from={300} durationInFrames={300}>
        <Scene2 />
      </Sequence>
      <Sequence from={600} durationInFrames={240}>
        <Scene3 />
      </Sequence>
      <Sequence from={840} durationInFrames={540}>
        <Scene4 />
      </Sequence>
      <Sequence from={1380} durationInFrames={540}>
        <Scene5 />
      </Sequence>
      <Sequence from={1920} durationInFrames={300}>
        <Scene6 />
      </Sequence>
      <Sequence from={2220} durationInFrames={450}>
        <Scene7 />
      </Sequence>
      <Sequence from={2670} durationInFrames={360}>
        <Scene8 />
      </Sequence>
      <Sequence from={3030} durationInFrames={300}>
        <Scene9 />
      </Sequence>
      <Sequence from={3330} durationInFrames={300}>
        <Scene10 />
      </Sequence>
    </AbsoluteFill>
  );
};
