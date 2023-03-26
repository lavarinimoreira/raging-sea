import "./App.css";
import WaterShader from "./components/WaterShader";
import React from "react";
import { Canvas } from "react-three-fiber";

const App = () => {
  return (
    <div className="main">
      <Canvas camera={{ fov: 75, near: 0.1, far: 100, position: [1, 0.25, 1] }}>
        <fog attach="fog" args={["#ffffff", 1, 5]} />
        <mesh /*scale-y={2 / 3}*/ rotation-x={-Math.PI * 0.5}>
          <planeBufferGeometry attach="geometry" args={[3.9, 3.9, 512, 512]} />
          <WaterShader />;
        </mesh>
      </Canvas>
      <footer className="footer">
        Built by{" "}
        <a href="https://lavarinimoreira.me" rel="noreferrer" target="_blank">
          Gabriel Lavarini
        </a>
      </footer>
    </div>
  );
};

export default App;
