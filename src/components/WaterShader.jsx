import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import waterVertexShader from "./../shaders/water/vertex.glsl";
import waterFragmentShader from "./../shaders/water/fragment.glsl";
import { Color, Texture, TextureLoader, Vector2 } from "three";
import { useControls } from "leva";

const WaterShader = () => {
  const materialRef = useRef();

  // getting the shaders:
  const vertexShader = waterVertexShader;
  const fragmentShader = waterFragmentShader;

  const uniforms = {
    uTime: { value: 0 },

    uBigWavesElevation: { value: 0.1 },
    uBigWavesFrequency: { value: new Vector2(-4.0, 1.5) },
    uBigWavesSpeed: { value: 0.2 },

    uSmallWavesElevation: { value: 0.1 },
    uSmallWavesFrequency: { value: 2 },
    uSmallWavesSpeed: { value: 0.2 },
    uSmallWavesIterations: { value: 4.0 },

    uSurfaceColor: { value: new Color("#00ffff") },
    uDepthColor: { value: new Color("#38b0de") },
    uColorOffset: { value: 0.2 },
    uColorMultiplier: { value: 5 },

    ufogColor: { value: new Color("#ffffff") },
    ufogNear: { value: 1 },
    ufogFar: { value: 5 },
  };

  // Using the time to animate the shader
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  return (
    <shaderMaterial
      ref={materialRef}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
      transparent={true}
    />
  );
};

export default WaterShader;
