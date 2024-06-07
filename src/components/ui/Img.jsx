import React from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

// Custom hook to load image as texture
const useImageAsTexture = (url) => {
  return useLoader(THREE.TextureLoader, url);
};

export const ImageMesh = ({ imageUrl, ...props }) => {
  const texture = useImageAsTexture(imageUrl);
  return (
    <mesh {...props} scale={17} >
      <planeGeometry args={[1, 1, 16, 16]} />
      <MeshDistortMaterial speed={10} distort={0.2} map={texture} />
    </mesh>
  );
};

