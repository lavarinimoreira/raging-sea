import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "react-three-fiber";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="main">
    <Canvas camera={{ fov: 75, near: 0.1, far: 100, position: [1, 1, 1] }}>
      <mesh /*scale-y={2 / 3}*/ rotation-x={-Math.PI * 0.5}>
        <planeBufferGeometry attach="geometry" args={[2, 2, 128, 128]} />
        <App />
      </mesh>
    </Canvas>
  </div>
);
