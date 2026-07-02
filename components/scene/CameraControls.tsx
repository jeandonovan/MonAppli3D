'use client';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

export default function CameraControls() {
  // keep simple — drei orbit with sensible limits
  return (
    <OrbitControls
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      maxPolarAngle={Math.PI / 2}
      minDistance={1}
      maxDistance={20}
      makeDefault
    />
  );
}
