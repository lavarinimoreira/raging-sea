import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import waterVertexShader from "./../shaders/water/vertex.glsl";
import waterFragmentShader from "./../shaders/water/fragment.glsl";
import { Color, Texture, TextureLoader, Vector2 } from "three";

const WaterShader = () => {
  // const materialRef = useRef();

  // getting the shaders:
  const vertexShader = waterVertexShader;
  const fragmentShader = waterFragmentShader;
  const uniforms = {
    uBigWavesElevation: { value: 0.2 },
  };

  return (
    // <rawShaderMaterial/>

    <shaderMaterial
      // ref={materialRef}
      // uniforms={uniforms}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
      // transparent={true}
    />
  );
};

export default WaterShader;
