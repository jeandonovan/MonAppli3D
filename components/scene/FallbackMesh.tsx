'use client';

export default function FallbackMesh() {
  return (
    <mesh>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial color="#9CA3AF" />
    </mesh>
  );
}
