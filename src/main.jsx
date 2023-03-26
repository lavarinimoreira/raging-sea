import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "react-three-fiber";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="main">
    <Canvas camera={{ fov: 75, near: 0.1, far: 100, position: [1, 0.25, 1] }}>
      <fog attach="fog" args={["#ffffff", 1, 5]} />
      <mesh /*scale-y={2 / 3}*/ rotation-x={-Math.PI * 0.5}>
        <planeBufferGeometry attach="geometry" args={[3.9, 3.9, 512, 512]} />
        <App />
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
