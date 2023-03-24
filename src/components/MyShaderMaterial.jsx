import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import testVertexShader from "./../shaders/test/vertex.glsl";
import textFragmentShader from "./../shaders/test/fragment.glsl";
import { Color, Texture, TextureLoader, Vector2 } from "three";

const MyShaderMaterial = () => {
  // const materialRef = useRef();

  // getting the shaders:
  const vertexShader = testVertexShader;
  const fragmentShader = textFragmentShader;

  return (
    // <rawShaderMaterial/>

    <shaderMaterial
      // ref={materialRef}
      // uniforms={uniforms}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      // transparent={true}
    />
  );
};

export default MyShaderMaterial;
