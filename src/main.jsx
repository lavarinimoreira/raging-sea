import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "react-three-fiber";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="main">
    <Canvas
      camera={{ fov: 75, near: 0.1, far: 100, position: [0.25, -0.25, 1] }}
    >
      <mesh /*scale-y={2 / 3}*/>
        <planeBufferGeometry attach="geometry" args={[1, 1, 32, 32]} />
        <App />
      </mesh>
    </Canvas>
  </div>
);
