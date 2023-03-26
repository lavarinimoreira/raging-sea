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

    uBigWavesElevation: { value: 0.2 },
    uBigWavesFrequency: { value: new Vector2(4.0, 1.5) },
    uBigWavesSpeed: { value: 0.4 },

    uDepthColor: { value: new Color("#186691") },
    uSurfaceColor: { value: new Color("#9bd8ff") },
    uColorOffset: { value: 0.2 },
    uColorMultiplier: { value: 5 },
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
      // transparent={true}
    />
  );
};

export default WaterShader;
